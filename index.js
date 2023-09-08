const express = require("express");

let server = express();
let weekdays = [
  "Monday",
  "Tuesday,",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let [first, last] = new Date().toISOString().split(".");
const now = new Date();

const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

let date =
  year +
  "-0" +
  month +
  "-0" +
  day +
  "T0" +
  hours +
  ":" +
  minutes +
  ":" +
  seconds +
  "Z";

server.get("/api", (req, res) => {
  let responce = {
    slack_name: req.query.slack_name,
    current_day: weekdays[new Date().getDay() - 1],
    utc_time: date,
    track: req.query.track,
    github_file_url:
      "https://github.com/thereson/student_access_endpint/index.js",
    github_repo_url: "https://github.com/thereson/student_access_endpint",
    status_code: 200,
  };
  res.json(responce);
});

server.listen(9000, () => {
  console.log("server running on port 9000");
});
