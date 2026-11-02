const express = require("express");

const app = express();

const logger = require("./middlewares/logger");

const userRoutes = require("./routes/userRoutes");

app.use(logger);

app.use("/users", userRoutes);



module.exports = app;