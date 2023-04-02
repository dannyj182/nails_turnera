import { ServiceTurnos } from '../service/turnos.js'

export class ControllerTurnos {
    constructor() {
        this.serviceTurnos = new ServiceTurnos()
    }
    getTurnos = async (req,res) => {
        const { id } = req.params
        res.json( await this.serviceTurnos.getTurnos(id) )
    }
    saveTurno = async (req,res) => {
        const json = req.body
        res.json( await this.serviceTurnos.saveTurno(json) )
    }
    updateTurno = async (req,res) => {
        const { id } = req.params
        const turno = req.body
        res.json( await this.serviceTurnos.updateTurno(turno, id) )
    }
    deleteTurno = async (req,res) => {
        const { id } = req.params
        res.json( await this.serviceTurnos.deleteTurno(id) )
    }
}