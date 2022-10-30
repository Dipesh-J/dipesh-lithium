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
    let updatedPrice = savedData.price
    let authorOfTs = await AuthorModel.find({author_id: savedData.author_id}).select("author_name")
        res.send({msg: authorOfTs,updatedPrice})
}

const listOfAuthors = async function(req,res){
    let books = await BookModel.find({price:{$gt:49,$lt:101}}).select({price:1,name:1,author_id:1,_id:0})
    const mapId = books.map(x=>x.author_id)
    let allAuthorNames = await AuthorModel.find({author_id:mapId}).select({ author_name:1 , author_id:1, _id:0})
    res.send({msg:books,allAuthorNames })

}



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.listChetanBhagat= listChetanBhagat
module.exports.authorTs = authorTs
module.exports.listOfAuthors = listOfAuthors