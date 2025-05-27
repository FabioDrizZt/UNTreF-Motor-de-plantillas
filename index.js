const express = require('express')
const path = require('path');
const morgan = require('morgan');
const personajes = require('./data/characters.json')

const app = express()
process.loadEnvFile()
const port = process.env.PORT || 3000

const data = {
  title: 'Diplomatura Backend UNTreF',
  message: 'Este es el mensaje',
  products: [
    {
      id: 1,
      name: 'Producto 1',
      price: 10,
      description: 'Descripción del Producto 1',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 20,
      description: 'Descripción del Producto 2',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 30,
      description: 'Descripción del Producto 3',
    },
  ]
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

// middlewares
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>')
})

app.get('/hello', (req, res) => {
  res.render('index', data)
})

app.get('/personajes', (req, res) => {
  res.render('grid', { title: 'Personajes', personajes })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})