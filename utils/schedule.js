import schedule from "node-schedule"
import { FactoryDAO_Usuarios } from '../model/DAO/usuarios/factoryUsuarios.js'
import config from '../config.js'
import { ObjectId } from "mongodb"

export class Schedule {
  constructor() {
    this.modelUsuarios = FactoryDAO_Usuarios.get(config.DB)
    this.id = '63c4f111687fa051d11485eb'
    this.user = {
      nombre: 'Danny',
      apellido: 'Jimenez',
      celular: '5491156017780',
      email: 'dannyj182@gmail.com',
      password: 'Danny123',
      rol: 'Owner',
      isEnabled: true
    }
  }
  jobUser = async _ => {
    schedule.scheduleJob('* * * * *', async _ => await this.revisarUsuario() )
  }
  revisarUsuario = async _ => {
    const user = await this.getUser()
    if(user) {
      if(!this.compararUsers(user)) await this.updateUser()
    } 
    else await this.saveUser()
  }
  getUser = async _ => {
    return await this.modelUsuarios.getUser(this.id)
  }
  saveUser = async _ => {
    this.user._id = ObjectId(this.id)
    return await this.modelUsuarios.saveUser(this.user)
  }
  updateUser = async _ => {
    return await this.modelUsuarios.updateUser(this.user, this.id)
  }
  compararUsers = usuario => usuario.email === this.user.email && usuario.password === this.user.password
}