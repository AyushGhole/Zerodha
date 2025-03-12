const { model } = require("mongoose");

const { OrderSchema } = require("../Schemas/OrderSchema.js");

const OrderModels = new model("Order", OrderSchema);

module.exports = { OrderModels };
