const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    number: Number,
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact