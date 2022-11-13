let axios = require("axios");
const { request } = require("express");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};


let getByDistrict = async function (req, res) {
  try {
    let district_id = req.query.district_id;
    let date = req.query.date;
    console.log(`query params are: ${district_id} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

const liveWeather = async function (req, res) {
  let cities = [
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "London",
    "Moscow",
  ]
  let cityArr = []
  for (i = 0; i < cities.length; i++) {
    let weather = {cities:cities[i]}
    let result = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=935ded84f958b3c781e5717bc3fe9c70`
    )
    weather.temp = result.data.main.temp
    cityArr.push(weather)
  }
  let sortedArr = cityArr.sort((a,b)=> {
    return a.temp - b.temp
  })
  console.log(sortedArr)
  res.send({status:true, msg:sortedArr})
};

const memeMaker = async function(req,res){
try{
  console.log(req)
  let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
  
  let options = {
    method: "post",
    url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    data: req.query
  }
  let result = await axios(options)
  console.log(result.data)
  res.status(200).send({status: true, meme: result.data})
}
  catch(err){
    res.status(500).send({msg:err.message})
  }
}
module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getByDistrict = getByDistrict;
module.exports.liveWeather = liveWeather;
module.exports.memeMaker = memeMaker;
