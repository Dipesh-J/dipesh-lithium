const booksData = require('/Users/Dell/Desktop/FunctionUp/lithium/src/models/userModel2')

let bookFind = async function(req,res){
    let bookSearch = await booksData.find()
    res.send({msg: bookSearch})
}

let bookCreate = async function(req,res){
    let input = req.body
    let createdData = await booksData.create(input)
    res.send({msg : createdData})
}

module.exports.bookFind = bookFind
module.exports.bookCreate = bookCreate