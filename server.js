import express from "express"
import { CnxMongoDB } from "./model/cnxMongoDB.js"
import config from "./config.js"

import { RouterSettings } from "./router/settings.js"
import { RouterTurnos } from "./router/turnos.js"
import { RouterUsuarios } from "./router/usuarios.js"

import { Schedule } from "./utils/schedule.js"
new Schedule().jobUser()

import cors from "cors"

const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/settings", new RouterSettings().start())
app.use("/shifts", new RouterTurnos().start())
app.use("/usuarios", new RouterUsuarios().start())

app.get("*", (req, res) => {
    res.redirect("/");
});

if (config.DB == "MONGO") {
    await CnxMongoDB.conectar()
    console.log(':::::::: Base de Datos conectada ::::::::')
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on("error", (error) => console.log(`Error en servidor: ${error.message}`))

import "./utils/schedule.js"