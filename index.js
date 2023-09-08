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

first = first.replace(/(\r\n|\n|\r)/g, "-");

server.get("/api", (req, res) => {
  let responce = {
    slack_name: req.query.slack_name,
    current_day: weekdays[new Date().getDay() - 1],
    track: req.query.track,
    utc_time: first + "Z",
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
