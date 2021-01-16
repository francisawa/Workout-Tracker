const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;


const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use("/api", apiroutes)
app.use("/", htmlroutes)

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
