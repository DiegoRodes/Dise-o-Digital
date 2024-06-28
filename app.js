//A esto se le llama instanciar
//Esta constante se hace para que obtenga todas las funciones del mongoose y ya existe en el codigo mongoose
const mongoose = require ("mongoose")
const { type } = require("os")

//Url de mongoCompass
const url_bd = "mongodb://localhost:27017/UTMA"

mongoose.connect(url_bd)

//A esto se le llama promesa
//Con esto se valida la conexion
//El .then va junto de la mano de .catch
.then(() => {
    console.log("si jalo la conexion")
})
.catch((err) => {
    console.log("no jalo, alv este pedo")
})
//Hasta aqui se lleva la conexion de la pura base de datos

//Esquema de la based de datos
//El esquema es el esqueleto a la estructura que va tener una tabla
//En SQL se le llama tabla
//En Mongo se le llaman colecciones
//Mongo no es una base de datos no SQL (puede ser o no SQL), es una base de datos no relacional
const esquema_alumno = new mongoose.Schema
({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    numero:{
        type:Number
    }
})

//Creacion de tabla
const modelo_alumno = new mongoose.model
("Tabla de datos",esquema_alumno)
//Ya se creo una tabla

//Con el .create se agregan datos a la tabla
modelo_alumno.create({
    name: "Jesus",
    apepat: "Salazar",
    numero: 449
})

//Para correr el proyecto js en la terminal se necesita del comando: Node app.js