import { CnxMongoDB } from "../../cnxMongoDB.js"

export class MongoSettings {
    getSettings = async _ => {
        if(!CnxMongoDB.connection) return {}
        try {
            return await CnxMongoDB.db.collection("settings").findOne({ _id: 0 })
        }
        catch(error) {
            return {
            error: 'Error en getSettings',
            message: `${error}`
            }
        }
    }
    saveSettings = async setting => {
        if(!CnxMongoDB.connection) return {}
        try {
            setting._id = 0
            return await CnxMongoDB.db.collection("settings").insertOne(setting)
        } 
        catch(error) {
            return {
                error: 'Error en saveSettings',
                message: `${error}`
            }
        }
    }
    updateSettings = async setting => {
        if(!CnxMongoDB.connection) return {}
        try {
            delete setting["_id"]
            return await CnxMongoDB.db.collection("settings").updateOne({ _id: 0 }, { $set: setting })
        }
        catch(error) {
            return {
            error: 'Error en updateSettings',
            message: `${error}`
            }
        }
    }
}