const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger-sabiha-mam')
//importing external package
const underscore = require('underscore')
const abc = require('../Logger/logger')
const helper = require('../util/helper')
let modStr = require('../validator/formatter')
const module5 = require('../module-5')


router.get('/test-me', function (req, res) {
   
    abc.welcome()
   
    console.log("Today's day and date are:",helper.date())
    console.log("day",helper.day())
    helper.getBatchInfo()
    console.log("month",helper.month())
    console.log("year",helper.year())
   
    modStr.modStr()
   
    module5.module5()
    
    
    
    res.send('Your api is working!!!')
});
    


module.exports = router;


