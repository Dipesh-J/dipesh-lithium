const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    
    author_id:{
        type: Number,
        required: true,
    },
    name: String,
    price: Number,
    ratings: Number
  

});
module.exports = mongoose.model('New_book', booksSchema) //new_books


// [{    

//     author_id:1,
//     author_name:"Chetan Bhagat",
//     age:25,
//     address:"New delhi"
// } ,
// { 
//     author_id:2,
//     author_name:"J.k Rowling",
//     age:60,
//     address:"Britain"
// } ,
// {    
//     author_id:3,
//     author_name:"Ramanujan",
//     age:100,
//     address:"Tamilnadu"
// }
// ]


// //Books:
// [{ 
//     name:"Two states",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,


// { 
//     name:"Five Point Someone",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,
// { 
//     name:"The 3 Mistakes of My Life",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,
// { 
//     name:"One Arranged Murder",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,
// { 
//     name:"Harry Porter",
//     author_id:2,
//     price:50,
//     ratings:4.5,
// } ,
// { 
//     name:"Harry Porter",
//     author_id:2,
//     price:50,
//     ratings:4.5,
// } 
// ]

