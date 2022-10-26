const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    bookName: {
        type: String,
        required: true
    }, 
    
    authorName: String, 
    
    tags: [String],
    
    price: {
        indianPrice: Number,
        europePrice: Number,
    },
    
    year: {
        type: Number,
        default: 2021
    },
    
    totalPages: Number,
    
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Assignment-26oct', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
