const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    vnev: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    rendeles:{
      type: String,
      required: true,
    }
    
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;