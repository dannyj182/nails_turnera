# Appointment Manager

It is a web app that allows managing appointments, clients, and general application settings, designed for a manicurist.

You have the option to assign roles to users, ensuring that only administrators can make configurations within the application.

## Link to Deployed Project

You can access the deployed version of this project on [Turnera](https://nails-turnera.glitch.me/).

This link will take you to the live version of the application so you can try it out and explore.

## Project setup

### Clone the Repository

First, clone this repository to your local machine using Git:

```bash
git clone https://github.com/dannyj182/nails_turnera.git
```

### .env File

Create a .env file in the project's root directory and configure the following environment variables:

```
# Server Configuration
URI='mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority'
BASE='nailsDB'
DB='MONGO'
```

Be sure to replace **`user`** and **`password`** with your MongoDB Atlas credentials.

### MongoDB Atlas

This project uses MongoDB Atlas as its cloud database. Make sure to create an account on [MongoDB Atlas](https://www.mongodb.com/atlas/database) if you don't have one already and configure your cluster according to your needs.

### Install Dependencies

Once you've cloned the repository and configured the .env file, you need to install the project's dependencies. Navigate to the project folder and run:

```bash
cd yourrepository
npm install
```

### Running the Server

Once all the dependencies are installed, you can start the server by running:

```bash
npm start
```

The server will run at `http://localhost:port`, where 'port' is the port you've configured in your Express application.

### Usage

This backend provides an API that can be used by the frontend application. Ensure that your frontend application is configured to make requests to this API.

### Frontend Repository

The frontend code corresponding to this project can be found in the [nails_turnera](https://github.com/dannyj182/nails_turnera_frontend.git) repository.

---

# Gestor de Turnos

Es una aplicación web que permite administrar turnos, clientes y configuraciones generales de la aplicación, diseñada para una manicurista.

Tienes la opción de asignar roles a los usuarios, asegurando que solo los administradores puedan realizar configuraciones dentro de la aplicación.

## Enlace al Proyecto Desplegado

Puedes acceder a la versión desplegada de este proyecto en [Turnera](https://nails-turnera.glitch.me/).

Este enlace te llevará a la versión en vivo de la aplicación para que puedas probarla y explorarla.

## Configuración del Proyecto

### Clonar el Repositorio

Primero, clona este repositorio en tu máquina local utilizando Git:

```bash
git clone https://github.com/dannyj182/nails_turnera.git
```

### Archivo .env

Crea un archivo .env en la raíz del proyecto y configura las siguientes variables de entorno:

```
# Server Configuration
URI='mongodb+srv://usuario:contraseña@cluster.mongodb.net/?retryWrites=true&w=majority'
BASE='nailsDB'
DB='MONGO'
```

Asegúrate de reemplazar **`user`** y **`password`** con tus credenciales de MongoDB Atlas.

### MongoDB Atlas

Este proyecto utiliza MongoDB Atlas como su base de datos en la nube. Asegúrate de crear una cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas/database) si aún no tienes una, y configura tu clúster según tus necesidades.

### Instalación de Dependencias

Una vez clonado el repositorio y configurado el archivo .env, debes instalar las dependencias del proyecto. Navega a la carpeta del proyecto y ejecuta:

```bash
cd turepositorio
npm install
```

### Ejecutar el Servidor

Una vez que todas las dependencias estén instaladas, puedes iniciar el servidor ejecutando:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:port`, donde 'puerto' es el puerto que hayas configurado en tu aplicación Express.

### Uso

Este backend proporciona una API que puede ser utilizada por la aplicación frontend. Asegúrate de que tu aplicación frontend esté configurada para hacer solicitudes a esta API.

### Repositorio Frontend

El código del frontend correspondiente a este proyecto se encuentra en el repositorio [nails_turnera](https://github.com/dannyj182/nails_turnera_frontend.git).