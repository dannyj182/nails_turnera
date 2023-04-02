import config from '../config.js'
import { FactoryDAO_Usuarios } from '../model/DAO/usuarios/factoryUsuarios.js'
import { FactoryDAO_Settings } from '../model/DAO/settings/factorySettings.js'

export class ServiceUsuarios {
    constructor() {
        this.modelUsuarios = FactoryDAO_Usuarios.get(config.DB)
        this.modelSettings = FactoryDAO_Settings.get(config.DB)
    }
    getUsers = async id => {
        if(id) {
            let user = await this.modelUsuarios.getUser(id)
            delete user["password"]
            return user
        }
        else {
            let users = await this.modelUsuarios.getUsers()
            users.forEach(element => {
                delete element["password"]
            });
            return users
        }
    }
    saveUser = async user => {
        if(user.nombre && user.apellido && user.celular && user.email && user.password){
            user.email = user.email.toLowerCase()
            const usuario = await this.modelUsuarios.existsUser(user.email)
            if(!usuario){
                user.rol = 'Cliente'
                user.isEnabled = false
                return await this.modelUsuarios.saveUser(user)
            }else{
                return {
                    "acknowledged": false,
                    "error": "Correo ya existe"
                }
            }
        }else{
            return {
                "acknowledged": false,
                "error": "Datos incompletos"
            }
        }
    }
    updateUser = async (user,id) => {
        return await this.modelUsuarios.updateUser(user,id)
    }
    searchUser = async user => {
        if(user.email && user.password){
            user.email = user.email.toLowerCase()
            const usuario = await this.modelUsuarios.searchUser(user)
            if(usuario){
                if(usuario.isEnabled){
                    delete usuario["password"]
                    const config = await this.modelSettings.getSettings()
                    return {
                        usuario: usuario,
                        config: config
                    }
                }else{
                    return {
                        acknowledged: false,
                        error: "Usuario inhabilitado, por favor comuníquese con el administrador del sistema"
                    }
                }
            }else{
                return {
                    acknowledged: false,
                    error: "Credenciales incorrectas"
                }
            }
        }else{
            return {
                acknowledged: false,
                error: "Datos incompletos"
            }
        }
    }
    deleteUser = async id => {
        return await this.modelUsuarios.deleteUser(id)
    }
}