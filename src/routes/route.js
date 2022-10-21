const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/shoes", function(req, res){
    let queryParams = req.query
    let brand = queryParams.brand
    let discount = queryParams.discount
    let color = queryParams.color
    console.log('The brand selected is ', brand)
    console.log('The discount option selected is ', discount)
    console.log('The color selected is ', color)
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       //send all the films
      res.send(films) 
})
// ................................................................................................................................................
// let playersData = {
    //        "name": "gopal",
    //        "dob": "1/2/1990",
    //        "gender": "male",
    //        "city": "banglore",
    //        "sports": [
        //            "soccer"
    //        ]
    //    }
    //    for(i = 0;i<players.length;i++){
        //    if (playersData.name == players[i].name){
    //     console.log("name already exists")
    //    }else{(players.push(playersData))}
    // } 
    // console.log(players) 
    // res.send("two different things")











router.get("/sol1", function (req, res) {
    
    let arr= [1,2,3,5,6,7]
    let n = arr[arr.length-1]
    let sumOfAll = (n*(n+1))/2
    let initial = 0
    let sumOfArr = arr.reduce((prev,curr)=>prev+curr,initial)
    let missingNumber = sumOfAll - sumOfArr
    res.send( { data: missingNumber } );
});

router.get("/sol2", function (req, res) {
    
    let arr= [33, 34, 35, 37, 38]
    let n = arr.length+1
    let sumOfNos = (n*(arr[0]+arr[arr.length-1]))/2
 let initial = 0
 let sumOfArr = arr.reduce((prev,curr)=>prev+curr,initial)
 let missingNumber = sumOfNos - sumOfArr
 
 
 res.send( { data: missingNumber } );
});
// ................................................................................................................................................




















//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
// numbers till last digit in the array


//logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
// numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing



















router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    
       let filmId = req.params.filmId
       
       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }
       
       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
    })
    

    

    
    
    
    let persons= [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
    name: "SK",
    age: 20,
    votingStatus: false
},
{
    name: "AA",
    age: 70,
    votingStatus: false
},
{
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
     name: "HO",
     age: 40,
     votingStatus: false
    }
]



router.post('/persons-1', function (req, res) {
    let votingAge = req.query.age
    let eligibleOnes =[]
    
    for(let i=0;i<persons.length;i++){
        if( persons[i].age>=votingAge){
            persons[i].votingStatus = true
            eligibleOnes.push(persons[i])
   }
}
res.send({ newList : eligibleOnes})
})













let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
router.post("/players", function(req,res){
    
    const body = req.body
    const player = players.find(x => x.name === body.name)

    if(player){
        res.send({message:"player already exist"})
    }else{
        players.push(body)
        res.send(players)
    }
})    
module.exports = router;

