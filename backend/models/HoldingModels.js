const { model } = require("mongoose");

const { HoldingSchema } = require("../Schemas/HoldingSchema.js");

const HoldingModels = new model("holding", HoldingSchema);

module.exports = { HoldingModels };
