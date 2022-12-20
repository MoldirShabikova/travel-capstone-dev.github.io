const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getDrinks, addDrinks} = require('./controller')

app.get('/getDrinks', getDrinks)

app.post('/addDrink', addDrinks)

app.listen(4000, ()=> console.log('Listening on port 4000'))