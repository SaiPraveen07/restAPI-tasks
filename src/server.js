const express = require("express");
require("./db/mongoose");
const UserRouter = require("./routers/user");
const EmployeeRouter = require("./routers/employee");
const port = 3000;
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(EmployeeRouter);

app.listen(port, () => {
  console.log(`server stareted on port ${port}`);
});
