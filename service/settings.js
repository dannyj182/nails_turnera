import config from '../config.js'
import { FactoryDAO_Settings } from '../model/DAO/settings/factorySettings.js'

export class ServiceSettings {
    constructor() {
        this.modelSettings = FactoryDAO_Settings.get(config.DB)
    }
    getSettings = async _ => {
        return await this.modelSettings.getSettings()
    }
    saveSettings = async settings => {
        return await this.modelSettings.saveSettings(settings)
    }
    updateSettings = async settings => {
        return await this.modelSettings.updateSettings(settings)
    }
}