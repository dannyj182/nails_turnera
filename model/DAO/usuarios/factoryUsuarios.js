import { MongoUsuarios } from './mongoUsuarios.js'

export class FactoryDAO_Usuarios {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO':
                return new MongoUsuarios()
            default:
                return new MongoUsuarios()
        }
    }
}