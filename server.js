const express = require ('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const contactsController = require('./controllers/contactsController')
const port = 3000
const dbUrl = 'mongodb+srv://manthrivivek:mongodb123@cluster0.3nphl3b.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(dbUrl)
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDB using mongooseJS')
})

//Start our server on a port
app.listen(port, ()=>{
    console.log('App is running on port', port)
})

  

//Routing
app.get('/contacts', contactsController.fetchContacts)
app.get('/contact/:id', contactsController.fetchContact)
app.post('/create-contact', contactsController.createContact)
app.put('/update-contact/:id', contactsController.updateContact)
app.delete('/delete-contact/:id', contactsController.deleteContact)

