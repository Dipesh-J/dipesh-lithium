const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};
//............................................assignment.............................

const signUpUser = async function (req, res) {
  let body = req.body;
  let user = await userModel.create(body);

  res.send({ msg: user });
};

const loginUsers = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let findData = await userModel.findOne({
    emailId: userName,
    password: password,
  });
  if (!findData)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: findData._id.toString(),
      batch: "Lithium",
      organization: "FunctionUp",
    },

    "Knock-Knock-who's-there-password"
  );
  res.sendHeader = ("y-auth-token", token);
  res.send({ status: true, yourToken: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["y-Auth-token"];
  if (!token) token = req.headers["y-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let userId = req.params.userId;
  let user = await userModel.findOne({_id:userId});
  if (!userId) return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: user });
};

const updatedUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) return res.send(" No such user exists");
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) return res.send({ status: false, msg: "No such user exists" });
  let delUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  res.send({ status: true, data: delUser });
};

module.exports.createUser = createUser;
module.exports.signUpUser = signUpUser;
module.exports.loginUsers = loginUsers;
module.exports.getUserData = getUserData;
module.exports.updatedUser = updatedUser;
module.exports.deleteUser = deleteUser;
