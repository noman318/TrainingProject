const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./index');

const connectionString =
  "mongodb://localhost:27017/myTrainProj";

mongoose
  .connect(connectionString,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then((res) => console.log("Connected to db successfully"))
  .catch((err) => console.log(err));

const app = express();
app.use("/Images",express.static("uploads"))
const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(8000, () => console.log("Listening on port 8000"));
