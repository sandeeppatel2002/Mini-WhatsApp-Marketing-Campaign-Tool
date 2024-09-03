const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sandeep:patel@cluster0.dqlto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected successfully");

    app.listen(8000, (error) => {
      if (error) console.log(error);

      console.log("connected successfully at", 8000);
    });
  })
  .catch((error) => {
    console.error("error", error);
  });

app.use("/api/campaign", userRoute);
