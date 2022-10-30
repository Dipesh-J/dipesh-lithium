const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const checkAuthorId = async function (req,res){
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const listChetanBhagat = async function (req,res){
    let author = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let finalData = await BookModel.find({author_id: author[0].author_id})
    res.send({msg: finalData})
} 

const authorTs = async function (req,res){
    let savedData= await BookModel.findOneAndUpdate({name: "Two States"}, {$set: {price:100}},{new:true})
    let authorOfTs = await AuthorModel.find({author_id: savedData.author_id}).select("author_name")
        res.send({msg: savedData})
    }

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.listChetanBhagat= listChetanBhagat
module.exports.authorTs = authorTs
// module.exports.

// const { count } = require("console")
// const BookModel= require("../models/bookModel")
// const AuthorModel = require("../models/authorModel")

// const createBook= async function (req, res) {
//     let data= req.body
//     let booksData= await BookModel.create(data)
//     res.send({msg: booksData})
// }


// const createAuthor= async function (req, res) {
//     let data= req.body
//     let authorData= await AuthorModel.create(data)
//     res.send({msg: authorData})
// }


// const bookByCb= async function(req, res){
//     let booksOfCb = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
//     let finalData = await BookModel.find({author_id:booksOfCb[0].author_id})
//     res.send({msg: finalData})
// }


// const getAuthorOfTs = async function (req, res) {
//     let authorOfTs = await BookModel.findOneAndUpdate({name:"Two states"},{$set: {price: 100}},{new:true})
//     let finalData = await AuthorModel.find({author_id:authorOfTs.author_id}).select("author_name")
//     let prices = authorOfTs.price
//     res.send({msg: finalData,prices})
// }


// const getInclCost = async function (req, res) {
//     let inclusiveCost = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
//     let allAuthorNames = await AuthorModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
//     res.send({msg:inclusiveCost,allAuthorNames })
// }

// module.exports.createBook= createBook
// module.exports.createAuthor= createAuthor
// module.exports.bookByCb= bookByCb
// module.exports.getAuthorOfTs = getAuthorOfTs
// module.exports.getInclCost = getInclCost

















// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body 
//     // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
