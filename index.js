import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`,
    );
    const result = response.data;
    const r = Math.floor(Math.random() * result.length);
    res.render("index.ejs", { data: result[r] });

  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.render("index.ejs", {
        error: error.message + ". No activity found. Try another compination.",
      });
    } else if (error.response && error.response.status === 429) {
      res.render("index.ejs", {
        error: error.message + ". Too many requests. Try after some time.",
      });
    } else {
      res.render("index.ejs", { error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
