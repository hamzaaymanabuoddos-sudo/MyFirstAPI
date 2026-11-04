const express = require("express");

const app = express();

const logger = require("./middlewares/logger");
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

const authRoutes = require("./routes/authRoutes");

app.use(logger);

app.use("/users", userRoutes);
app.use("/auth", authRoutes);


module.exports = app;