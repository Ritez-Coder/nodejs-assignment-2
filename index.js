const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
let data = "";
const app = express();
app.listen(5000);

const cryptoPriceScrapper = async () => {
  try {
    const result = await axios.get("https://coinmarketcap.com/");
    data = result.data;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/crypto", (req, res) => {
  cryptoPriceScrapper();
  res.send(data);
});
