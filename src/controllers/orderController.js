const User = require("../models/userModel")
const Product = require("../models/productModel")
const Order = require("../models/orderModel")


const postorder = async (req, res) => {
  const userid = await User.findOne({ _id: req.body.userid})
  const productid = await Product.findOne({_id: req.body.productid})

  if(!userid) return res.send("User is not present in the DB")
  if(!productid) return res.send("Product is not present in the DB")

  if(req.header('isFreeAppUser') == true){
    const data = await Order.create({
      userid: req.body.userid,
      productid: req.body.productid,
      amount:0,
      isFreeAppUser: req.header('isFreeAppUser'),
    }).populate('user','products')
    return res.send({msg:data})

  } else {
    if(userid.balance < productid.balance){
      return res.send("Insufficient Balance")
  } else {
    var balance = userid.balance - productid.price;
  }
  const data = await Order.create({
              userid: req.body.userid,
              productid: req.body.productid,
              amount: productid.price,
              isFreeAppUser: req.header('isFreeAppUser'),
            });

      const user = await User.findByIdAndUpdate(
        { _id: req.body.userid },
        { $set: { balance: balance } },
        { new: true }
      );
      res.send({msg:data,user})
  }
  
};
const getorder = async (req, res) => {
      
        const result = await Order.find();
        return res.send({msg: result});
      }

module.exports.postorder = postorder
module.exports.getorder = getorder

//     try {
//       const userid = await User.findOne({ _id: req.body.userid });
//       const productid = await Product.findOne({ _id: req.body.productid });
//       if (!userid) return res.status(401).send("User is not Present in db");
//       if (!productid) return res.status(401).send("Product is not Present in db");
//       // var price = 0
//       if (req.header('isFreeAppUser')== true) {
//         const data = new Order({
//           userid: req.body.userid,
//           productid: req.body.productid,
//           amount: price,
//           isFreeAppUser: req.header('isFreeAppUser'),
//         });
  
//         let result = await data.save();
//         return res.status(200).send(result);
//       } else {
//         if (userid.balance < productid.price) {
//           return res.status(401).json("INsufficient balance");
//         } else {
//           price = productid.price;
//           var balance = userid.balance - productid.price;
//         }
  
//         const data = new Order({
//           userid: req.body.userid,
//           productid: req.body.productid,
//           amount: price,
//           isFreeAppUser: req.header('isFreeAppUser'),
//         });
  
//         const user = await User.findByIdAndUpdate(
//           { _id: req.body.userid },
//           { $set: { balance: balance } },
//           { new: true }
//         );
//         let result = await data.save();
  
//         return res.status(200).json({
//           "msg":result,
//           user
//         });
//       }
//     } catch (error) {
//       return res.status(500).send(error);
//     }
//   };
  
//  const getorder = async (req, res) => {
//     try {
//       const result = await Order.find();
//       return res.status(200).send(result);
//     } catch (error) {
//       return res.status(200).send(error);
//     }