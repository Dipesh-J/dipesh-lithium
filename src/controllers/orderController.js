const User = require("../models/userModel");
const Product = require("../models/productModel");
const Order = require("../models/orderModel");

const postorder = async (req, res) => {
  const userid = await User.findOne({ _id: req.body.userid });
  const productid = await Product.findOne({ _id: req.body.productid });

  if (!userid) return res.send("User is not present in the DB");
  if (!productid) return res.send("Product is not present in the DB");
let isFreeAppUser = req.body.isFreeAppUser
  if (isFreeAppUser === true) {
    const data = await Order.create({
      userid: req.body.userid,
      productid: req.body.productid,
      amount: 0,
      isFreeAppUser: req.header("isFreeAppUser"),
    })
    return res.send({ msg: data });
  } else {
    if (userid.balance < productid.price) {
      return res.send("Insufficient Balance");
    } 
    }
    const data = await Order.create({
      userid: req.body.userid,
      productid: req.body.productid,
      amount: productid.price,
      isFreeAppUser: req.header("isFreeAppUser"),
    });

    const order = await User.findByIdAndUpdate(userid, {$inc:{balance: -productid.price}},{new: true})
    res.send({ msg: data, order });

  
};
const getorder = async (req, res) => {
  const result = await Order.find();
  return res.send({ msg: result });
};

module.exports.postorder = postorder;
module.exports.getorder = getorder;

