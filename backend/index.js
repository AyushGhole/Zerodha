// ENV Declarations
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Declaring cloud databases
const dbUrl = process.env.ATLAS_URL;
const PORT = process.env.PORT || 3002;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { HoldingModels } = require("./models/HoldingModels.js");
const { PositionsModel } = require("./models/PositionModels.js");
const { OrderModels } = require("./models/OrderModels.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const bycrpt = require("bcrypt");
const { hash } = require("bcrypt");
const { UserModel } = require("./models/ZerodhaUser.js");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Mongoose Connection
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModels.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModels({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order Saved Successfully");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const handldePassword = await bycrpt.hash(password, 10);
    const newUser = new UserModel({
      username: username,
      password: handldePassword,
    });
    console.log(newUser);
    await newUser.save();
    res.json({ message: "User registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, (req, res) => {
  console.log("Server is listening to the port ...");
});
