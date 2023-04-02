import express from 'express'
import { ControllerUsuarios } from '../controller/usuarios.js'

export class RouterUsuarios {
    constructor() {
        this.router = express.Router()
        this.controllerUsuarios = new ControllerUsuarios()
    }
    start() {
        this.router.get('/:id?', this.controllerUsuarios.getUsers)
        this.router.post('/', this.controllerUsuarios.saveUser)
        this.router.put('/:id', this.controllerUsuarios.updateUser)
        this.router.post('/validar', this.controllerUsuarios.searchUser)
        this.router.delete('/:id', this.controllerUsuarios.deleteUser)
        return this.router
    }
}