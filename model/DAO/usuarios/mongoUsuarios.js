import { CnxMongoDB } from "../../cnxMongoDB.js"
import { ObjectId } from "mongodb"

export class MongoUsuarios {
  getUser = async id => {
    if(!CnxMongoDB.connection) return {}
    if(ObjectId.isValid(id)) {
      try {
       return await CnxMongoDB.db.collection("usuarios").findOne({ _id: ObjectId(id) })
      }
      catch(error) { 
        console.error('Error en getUser', error)
        return {
          error: 'Error en getUser',
          message: `${error}`
        }
      }
    } else return {}
  }
  getUsers = async _ => {
    if(!CnxMongoDB.connection) return []
    try {
      return await CnxMongoDB.db.collection("usuarios").find({}).toArray()
    } catch { return [] }
  }
  saveUser = async usuario => {
    if(!CnxMongoDB.connection) return {}
    try {
      return await CnxMongoDB.db.collection("usuarios").insertOne(usuario)
    } 
    catch(error) { 
      console.error('Error en saveUser', error)
      return {
        error: 'Error en saveUser',
        message: `${error}`
      }
    }
  }
  updateUser = async (usuario, id) => {
    if(!CnxMongoDB.connection) return {}
    if(ObjectId.isValid(id)){
      try {
        delete usuario["_id"]
        return await CnxMongoDB.db.collection("usuarios").updateOne({ _id: ObjectId(id) }, { $set: usuario })
      }
      catch(error) { 
        console.error('Error en updateUser', error)
        return {
          error: 'Error en updateUser',
          message: `${error}`
        }
      }
    } else return {}
  }
  searchUser = async user => {
    if(!CnxMongoDB.connection) return {}
    try {
      return await CnxMongoDB.db.collection("usuarios").findOne({ email: user.email, password: user.password })
    }
    catch(error) {
      console.error('Error en searchUser', error)
      return {
        error: 'Error en searchUser',
        message: `${error}`
      }
    }
  }
  existsUser = async correo => {
    if(!CnxMongoDB.connection) return {}
    try {
      return await CnxMongoDB.db.collection("usuarios").findOne({ email: correo })
    }
    catch(error) { 
      console.error('Error en existsUser', error)
      return {
        error: 'Error en existsUser',
        message: `${error}`
      }
    }
  }
  deleteUser = async id => {
    if (!CnxMongoDB.connection) return {}
    if(ObjectId.isValid(id)){
        try{
          return await CnxMongoDB.db.collection("usuarios").deleteOne({ _id: ObjectId(id) })
        }
        catch(error) {
            return {
            error: 'Error en deleteUser',
            message: `${error}`
            }
        }
    } else return {error: 'Id inválido'}
  }
}