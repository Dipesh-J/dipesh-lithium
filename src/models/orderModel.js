const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
      required: true
    },
    isFreeAppUser:{
      type:Boolean,
      default:false
    },
    amount:{
      type:Number
    },
    date: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
