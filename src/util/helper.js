const currDate = function(){

 let date =  new Date()
 return date.toDateString()
}
let currDay=function(){
let date =  new Date()
const day = date.getDate()
return day
}
let currMonth = function(){
let date =  new Date()
const month = date.getMonth()
return month+1
}
let currYear = function(){
let date =  new Date()
const year = date.getFullYear()
return year
}
function getBatchInfo() {
    console.log("Lithium, W4D5, The topic for today is: Calling function from different modules in NodeJS")
}
module.exports.date = currDate
module.exports.day = currDay
module.exports.month = currMonth
module.exports.year = currYear
module.exports.getBatchInfo = getBatchInfo

