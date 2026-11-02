// const express = require("express");
// const https = require("https");
// const fs = require("fs");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Secure Express Server");
// });

// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem")
// };

// https.createServer(options, app).listen(3000, () => {
//   console.log("HTTPS server running");
// });


const https = require("https");

const options = {
  hostname: "example.com",
  port: 443,
  path: "/api/users",
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Status:", res.statusCode);
    console.log("Response:", data);
  });
});

req.on("error", (error) => {
  console.error("Request failed:", error);
});

req.end();