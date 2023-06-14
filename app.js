const PORT = 8000;
const data = require("./data");
const express = require("express");
const app = express();
const products = "./data";

app.get("/api/products", (req, res) => {
  return res.status(200).json({ data: data });
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT} `);
});

//to test the code >> go to browser (localhost:8000) or
//postman copy and past the url after choosing the method
