const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port= process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contendio estatico - tiene prioridad sobre las rutas definidas abajo (app.get())
app.use(express.static('public')) //especificar el path

//Esto no se ejecuta porque esta entrado a la carpeta public
app.get('/', (req, res) =>{
  res.render('home', {
    nombre: 'Gabriel',
    titulo: 'Curso de node'
  });
})

/*app.get('/index', (req, res) =>{
  res.sendFile(__dirname + '/public/index.html')
})
*/

app.get('/generic', (req, res) =>{
  res.render('generic', {
    nombre: 'Gabriel',
    titulo: 'Curso de node - Generic'
  });
})

app.get('/elements', (req, res) =>{
  res.render('elements', {
    nombre: 'Gabriel',
    titulo: 'Curso de node - Elements'
  });
})

app.get('*', (req, res) =>{
  res.sendFile(__dirname + '/public/404.html') //el dirname es la ruta donde esta corriendo
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})