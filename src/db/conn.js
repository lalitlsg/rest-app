const { url, db } = require("../config");
const mongoose = require("mongoose");
mongoose
  .connect(`${url}/${db}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.log(error);
    console.log(`${url}/${db}`);
    console.log("db not connected");
  });
