const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    foglalte: {
      type: Boolean,
      required: true,
    },
    szam: {
      type: Number,
      required: true,
    },
    szemelySzam: {
      type: Number,
      required: true,
    },
    Nev: {
      type: String,
      required: true,
    },
    hol: {
    type: String,
    required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefon: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const TableModel = mongoose.model("tables", TableSchema);

module.exports = TableModel;