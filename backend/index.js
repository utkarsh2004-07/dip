const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

const filePath = path.join(__dirname, "code.txt");



// API to trigger file download
app.get("/code", (req, res) => {
  res.download(filePath, "code_snippets.txt", (err) => {
    if (err) {
      console.error("Error in downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
