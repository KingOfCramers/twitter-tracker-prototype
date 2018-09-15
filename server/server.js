const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("HELLO");
});

app.use(express.static(publicPath)); // Serve up static

app.get("*", (req,res) => {
  res.sendFile(path.join(publicPath, "index.html")); // Fallback route, in case of GET request isn't in public folder...
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});