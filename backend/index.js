//this is the main file of the backend
const express = require("express");
require("dotenv").config();
const connectDB = require("./src/services/db.service");
const bodyParser = require("body-parser");
const generalConfig = require("./src/configs/index").generalConfig;


//initialize express
const app = express();

//init middleware
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

//define routes
app.use("/api/users", require("./src/routes/user.route"));
app.use("/api/auth", require("./src/routes/auth.route"));

const PORT = generalConfig.port;

//connect to database
connectDB();

//start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
