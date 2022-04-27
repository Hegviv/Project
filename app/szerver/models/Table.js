const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    nap: {
      type: String,
      required: true,
    },
    ido: {
      type: String,
      required: true,
    },
    fo:{
      type: Number,
      required: true,
    },
    hol:{
      type: String,
      required: true,
    },
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
    megjegyzes:{
      type: String,
      
    },
    
  },
  { timestamps: true }
);

const TableModel = mongoose.model("tables", TableSchema);

module.exports = TableModel;