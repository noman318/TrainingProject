const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./index");
const app = express();

app.use(cors());
app.use(express.json());
const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

const connectionString = "mongodb://localhost:27017/myTrainProj";

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("Connected to db successfully"))
  .catch((err) => console.log(err));

app.use("/Images", express.static("uploads"));

app.get("/api", (req, res) => {
  res.send("testing");
});
app.use("/", routes);

app.listen(8000, () => console.log("Listening on port 8000"));
