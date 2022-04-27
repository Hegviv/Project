const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ejs = require("ejs");
dotenv.config();

const app = express();

// Adatbázis kapcsolat
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Sikeres adatbázis csatlakozás!");
  })
  .catch((err) => {
    console.log(`Valami hiba történt: ${err.message}`);
  });

// Middleware-k
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("view-engine", "ejs");

// Route-ok
app.use("/api/table", require("./routes/tableRoute"));
app.use("/api/menu", require("./routes/menuRoute"));
app.use("/api/order", require("./routes/orderRoute"));


// Route-ok szerkesztéshez
// const Table = require("./models/Table");

// app.get("/", async (req, res) => {
//   const tables = await Table.find();
//   res.render("index.ejs", {
//     tables: tables,
//   });
// });

// app.get("/feltoltes", (req, res) => {
//   res.render("feltoltes.ejs");
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`A szerver fut a következő porton: http://localhost:${PORT}`);
});