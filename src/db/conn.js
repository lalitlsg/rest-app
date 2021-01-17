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
  .catch(() => {
    console.log("db not connected");
  });
