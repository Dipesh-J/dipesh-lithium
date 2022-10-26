const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {// get
    let allBooks= await BookModel.find().select({bookName:1 , authorName:1 , _id: 0})  
    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) {// post
    let yearInput = req.body
    let allBooks= await BookModel.find( yearInput )
    res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
    let search = req.body
let allBooks= await BookModel.find( search )
    res.send({msg: allBooks})
}
const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find(  {$or: [ {"price.indianPrice": {$eq:100}},{"price.indianPrice":{$eq:200}},{"price.indianPrice":{$eq:500}}]}
    )
    res.send({msg: allBooks})
}
const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find( {$or:[{stockAvailable:{$eq:true}}, {totalPages:{$gt:500}}]} ).count()
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks