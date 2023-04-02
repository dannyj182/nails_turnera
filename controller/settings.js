import { ServiceSettings } from '../service/settings.js'

export class ControllerSettings {
    constructor() {
        this.serviceSettings = new ServiceSettings()
    }
    getSettings = async (req,res) => {
        res.json( await this.serviceSettings.getSettings() )
    }
    saveSettings = async (req,res) => {
        const settings = req.body
        res.json( await this.serviceSettings.saveSettings(settings) )
    }
    updateSettings = async (req,res) => {
        const settings = req.body
        res.json( await this.serviceSettings.updateSettings(settings) )
    }
}