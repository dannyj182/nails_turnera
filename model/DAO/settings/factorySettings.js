import { MongoSettings } from './mongoSettings.js'

export class FactoryDAO_Settings {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO':
                return new MongoSettings()
            default:
                return new MongoSettings()
        }
    }
}