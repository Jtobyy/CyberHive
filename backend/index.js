//this is the main file of the backend
const express = require("express");
const connectDB = require("./src/services/db.service");
const bodyParser = require("body-parser");
const generalConfig = require("./src/configs/index").generalConfig;

//initialize express
const app = express();

//connect to database
connectDB();

//init middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//define routes
app.use("/api/users", require("./routes/user.route"));
app.use("/api/auth", require("./routes/auth.route"));

const PORT = generalConfig.port;

//start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
