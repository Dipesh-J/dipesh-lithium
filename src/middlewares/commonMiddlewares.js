
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const myMiddleware = function(req, res, next){
//     console.log('I am inside a middleware!')
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
// module.exports.myMiddleware = myMiddleware


// how to check if an array is a palindrome?

// function checkPalindrom (str) {
//   return str == str.split('').reverse().join('');
// }
let a =5
let arr = [2,4,1,3,5]

function solution(a,arr) {
    let inverted = []
  for (i=0; i<a-1; i++) {
    for(j=i+1; j<a ;j++){
    if((arr[i]>arr[i+l]) && (i<(i+l)))
    {
        inverted.push(arr[i]) 
    }
   }
  } console.log( inverted.length)
}

