import express from 'express'
import { ControllerSettings } from '../controller/settings.js'

export class RouterSettings {
    constructor() {
        this.router = express.Router()
        this.controllerSettings = new ControllerSettings()
    }
    start() {
        this.router.get('/', this.controllerSettings.getSettings)
        this.router.post('/', this.controllerSettings.saveSettings)
        this.router.put('/', this.controllerSettings.updateSettings)
        return this.router
    }
}