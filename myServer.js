const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("../routes/get")(app);
require("../routes/post")(app);
require("../routes/update")(app);
require("../routes/delete")(app);
require("../routes/updateMultiple")(app);
require("../routes/Search")(app);

mongoose.connect(
 "mongodb+srv://aryanatri:Aryan2003@mycarapp.oky4p.mongodb.net/?retryWrites=true&w=majority&appName=myCarApp",

  {
    useNewUrlParser: true,
  }
);



const PORT = 8080;
app.listen(PORT, () => {
  console.log(
    `This server is running on port ${PORT}: \nBrowse to http://localhost:8080 to  see the server.`
  );
});

module.exports = app;

