const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {
        type:String,
        required: true
    },
    authorName: {
        type:String,
        required: true
    },
    category: String,
    year: Number
},{timestamp: true}) // It is used to automatically create a key "createdAt:" which tells the exact time at which it entry is made. Also, "updateAt" is created which shows the time at which it was updated.

module.exports = mongoose.model('Book', bookSchema) // books is the name given to collection data, it will be changed into plural
// the above line is creating a now model and exporting it.
