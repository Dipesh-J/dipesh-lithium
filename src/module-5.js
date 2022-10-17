let lodash = require('lodash')
let module5 = function () {
    let listMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(lodash.chunk(listMonths,3))


let odds = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(odds))


let randomNos1 = [1,2,3]
let randomNos2 = [2,3,4]
let randomNos3 = [3,4,5]

console.log(lodash.union(randomNos1,randomNos2,randomNos3));


let movieList = [["horror","The Shining"],
                ["drama","Titanic"],
                ["thriller","Shutter Island"],
                ["fantasy","Pans Labyrinth"]]

console.log(lodash.fromPairs(movieList))

}


module.exports.module5 = module5
