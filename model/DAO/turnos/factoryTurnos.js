import { MongoTurnos } from './mongoTurnos.js'

export class FactoryDAO_Turnos {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO':
                return new MongoTurnos()
            default:
                return new MongoTurnos()
        }
    }
}