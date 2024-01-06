require("dotenv").config();
const mongoose = require("mongoose");

const dbUri = () => {
  let uri;
  if (process.env.Node_Environment === "dev") {
    uri = process.env.Dev_DB_Uri;
    uri = uri.replace("<username>", process.env.DB_User);
    uri = uri.replace("<password>", process.env.DB_Pass);
  } else {
    uri = process.env.Prod_DB_Uri;
  }
  return uri;
};

const connectDB = async () => {
  const uri = dbUri();
  await mongoose.connect(uri, { dbName: process.env.DB_Name });
  console.log("connection success !!!");
};

module.exports = connectDB;
