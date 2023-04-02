import { ServiceUsuarios } from '../service/usuarios.js'

export class ControllerUsuarios {
    constructor() {
        this.serviceUsuarios = new ServiceUsuarios()
    }
    getUsers = async (req,res) => {
        const { id } = req.params
        res.json( await this.serviceUsuarios.getUsers(id) )
    }
    saveUser = async (req,res) => {
        const user = req.body
        res.json( await this.serviceUsuarios.saveUser(user) )
    }
    updateUser = async (req,res) => {
        const { id } = req.params
        const user = req.body
        res.json( await this.serviceUsuarios.updateUser(user,id) )
    }
    searchUser = async (req,res) => {
        const user = req.body
        res.json( await this.serviceUsuarios.searchUser(user) )
    }
    deleteUser = async (req,res) => {
        const { id } = req.params
        res.json( await this.serviceUsuarios.deleteUser(id) )
    }
}