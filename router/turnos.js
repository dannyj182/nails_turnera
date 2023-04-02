import express from 'express'
import { ControllerTurnos } from '../controller/turnos.js'

export class RouterTurnos {
    constructor() {
        this.router = express.Router()
        this.controllerTurnos = new ControllerTurnos()
    }
    start() {
        this.router.get('/:id?', this.controllerTurnos.getTurnos)
        this.router.post('/', this.controllerTurnos.saveTurno)
        this.router.put('/:id', this.controllerTurnos.updateTurno)
        this.router.delete('/:id', this.controllerTurnos.deleteTurno)
        return this.router
    }
}