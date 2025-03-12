const { model } = require("mongoose");

const { UserSchema } = require("../Schemas/ZerodhaUser.js");

const UserModel = new model("ZerodhaUser", UserSchema);

module.exports = { UserModel };
