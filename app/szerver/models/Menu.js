const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: true,
    },
    tipus: {
      type: String,
      required: true,
    },
    /*leiras: {
        type: String,
        required: true,
    },*/
    ar: {
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

const MenuModel = mongoose.model("menus", MenuSchema);

module.exports = MenuModel;