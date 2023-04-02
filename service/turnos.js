import config from '../config.js'
import { FactoryDAO_Turnos } from '../model/DAO/turnos/factoryTurnos.js'
import { FactoryDAO_Usuarios } from '../model/DAO/usuarios/factoryUsuarios.js'
import { ObjectId } from "mongodb"

export class ServiceTurnos {
    constructor() {
        this.modelTurnos = FactoryDAO_Turnos.get(config.DB)
        this.modelUsuarios = FactoryDAO_Usuarios.get(config.DB)
    }
    getTurnos = async (id) => {
        if(id) return await this.modelTurnos.getTurnosId(id)
        else return await this.modelTurnos.getTurnos()
    }
    saveTurno = async json => {
        const user = await this.modelUsuarios.getUser(json.reqId)
        if(json.inicio && json.fin) {
            if(user) json.user = user
            return await this.getTurnosFechas(json)
        }
        if (user.rol === 'Owner') json.estado = 'Confirmado'
        else json.estado = 'Pendiente'
        return await this.modelTurnos.saveTurno(json)
    }
    getTurnosFechas = async json => {
        if (json.user && json.user.rol === 'Owner') {
            delete json["user"]
            let turnos = []
            if(json.estado) turnos = await this.modelTurnos.getTurnosFechasEst(json)
            else turnos = await this.modelTurnos.getTurnosFechas(json)
            const users = await this.modelUsuarios.getUsers()
            turnos.forEach( turno => {
                if(ObjectId.isValid(turno.clientId)) {
                    let res = users.find(user => user._id.toString() === ObjectId(turno.clientId).toString() )
                    if (res) delete res["password"]
                    else res = {
                        _id: 0,
                        nombre: 'Sin',
                        apellido: 'Nombre',
                        celular: '0',
                        email: 'sin_email@correo.com',
                        rol: 'Cliente',
                        isEnabled: false
                    }
                    turno.client = res
                }
                delete turno["clientId"]
            })
            return turnos
        }else if(json.estado) {
            return await this.modelTurnos.getTurnosFechasEst(json)
        }else{
            return await this.modelTurnos.getTurnosId(json.reqId)
        }
    }
    updateTurno = async (turno, id) => {
        return await this.modelTurnos.updateTurno(turno, id)
    }
    deleteTurno = async id => {
        return await this.modelTurnos.deleteTurno(id)
    }
}