const { port } = require("./config");
require("./db/conn");
const express = require("express");
var cors = require("cors");
const studentRouter = require("./routers/students");
const app = express();

app.use(cors());

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`App Running At ${port}`);
});
