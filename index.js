const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8010

//Servidor de contenido estatico
app.use(express.static('public'))


//Configuración del directorio de las vistas hbs
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')


//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname+'/public/partials');

app.get('/',(req, res) => {
    res.render('disponibilidad')
})

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})
