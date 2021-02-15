const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (_, res) => res.send("welcome to my heroku deployment"));
app.get("/json", (_, res) =>
  res.json({
    code: 200,
    message: "Welcome to my heroku deployment",
    dbEnv: process.env.DATABASEURL,
  })
);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
