'use strict'
//variables
const express = require("express")
const app = express()
const morgan = require('morgan')
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const studentsRoutes = require('./routes/students')
const mattersRoutes = require('./routes/matter')
//settings
app.set('json spaces',4)
//middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*');
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});
//routes
app.use('/students',studentsRoutes)
app.use('/matter',mattersRoutes)
//conecion a mongo db
mongoose.connect('mongodb://localhost:27017/school', (err, res) => {
    if (err) {
        return console.log(`hay un error de conexion ala base de datos ${err}`)
    }
    //mensje para dar a conocer que la base de datos se a conectado exitosamente
    console.log(`conexion exitosa ala base de datos`)
    //corriendo el servidor
    app.listen(3000, () => {
        console.log("Node server running on http://localhost:3000")
    })
   
})