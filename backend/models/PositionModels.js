const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/PositionSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
