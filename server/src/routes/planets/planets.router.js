const express = require("express");
const { get } = require("../../app");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
