import { CnxMongoDB } from "../../cnxMongoDB.js"
import { ObjectId } from "mongodb"

export class MongoTurnos {
    getTurnosId = async id => {
        if(!CnxMongoDB.connection) return []
        if(ObjectId.isValid(id)) {
            try {
                return await CnxMongoDB.db.collection("turnos").find({ clientId: id }).toArray()
            }
            catch(error) {
                return {
                error: 'Error en getTurnosId',
                message: `${error}`
                }
            }
        } else return []
    }
    getTurnosFechas = async fechas => {
        if(!CnxMongoDB.connection) return []
        try {
            return await CnxMongoDB.db.collection("turnos")
            .find({$and: [{fecha: {$gte: fechas.inicio}}, {fecha: {$lte: fechas.fin}}]})
            .sort({fecha:1}).toArray()
        }
        catch(error) {
            return {
            error: 'Error en getTurnosFechas',
            message: `${error}`
            }
        }
    }
    getTurnosFechasEst = async fechas => {
        if(!CnxMongoDB.connection) return []
        try {
            return await CnxMongoDB.db.collection("turnos")
            .find({$and: [{fecha: {$gte: fechas.inicio}}, {fecha: {$lte: fechas.fin}}, {estado: fechas.estado}]})
            .sort({fecha:1}).toArray()
        }
        catch(error) {
            return {
            error: 'Error en getTurnosFechas',
            message: `${error}`
            }
        }
    }
    getTurnos = async _ => {
        if(!CnxMongoDB.connection) return[]
        try {
            return await CnxMongoDB.db.collection("turnos").find({}).sort({fecha:1}).toArray()
        }
        catch(error) {
            return {
            error: 'Error en getTurnos',
            message: `${error}`
            }
        }
    }
    saveTurno = async turno => {
        if(!CnxMongoDB.connection) return {}
        try {
            return await CnxMongoDB.db.collection("turnos").insertOne(turno)
        } 
        catch(error) {
            return {
                error: 'Error en saveTurno',
                message: `${error}`
            }
        }
    }
    updateTurno = async (turno, id) => {
        if(!CnxMongoDB.connection) return {}
        if(ObjectId.isValid(id)){
            try {
                delete turno["_id"]
                return await CnxMongoDB.db.collection("turnos").updateOne({ _id: ObjectId(id) }, { $set: turno })
            }
            catch(error) {
                return {
                error: 'Error en updateTurno',
                message: `${error}`
                }
            }
        }
    }
    deleteTurno = async id => {
        if (!CnxMongoDB.connection) return {}
        if(ObjectId.isValid(id)){
            try{
                return await CnxMongoDB.db.collection("turnos").deleteOne({ _id: ObjectId(id) })
            }
            catch(error) {
                return {
                error: 'Error en deleteTurno',
                message: `${error}`
                }
            }
        }
    }
}