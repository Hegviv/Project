const mongoose = require("mongoose");

const BasketSchema = new mongoose.Schema(
  {
    id:{
      type: String,
      required: true,
    },
    name:{
      type: String,
      required:true,
    },
    qty:{
      type: Number,
      required:true,
    },
    price:{
      type:Number,
      required:true,
    },
    
  },
  { timestamps: true }
);

const BasketModel = mongoose.model("baskets", BasketSchema);

module.exports = BasketModel;