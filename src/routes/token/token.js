const token = require("express").Router();
const createToken = require("../../middleweres/createToken");

token.post("/createToken", createToken);

module.exports = token;
