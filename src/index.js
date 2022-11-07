const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://dipesh_015:1234@myfirstcluster.9x71xrh.mongodb.net/middleware-2", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is now connected and ready to use, GoodLuck for the assignment!"))
.catch ( err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 0007, function() {
    console.log('Express app is running on your desired port ' + (process.env.PORT || 0007))
});

