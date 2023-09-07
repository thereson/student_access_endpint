const express = require("express");

let server = express();
let weekdays = [
  "monday",
  "tuesday,",
  "wednesday",
  "thurday",
  "friday",
  "saturday",
  "sunday",
];
let [first, last] = new Date().toISOString().split(".");

server.get("/api", (req, res) => {
  let responce = {
    slack_name: req.query.slack_name,
    current_day: weekdays[new Date().getDay() - 1],
    utc_time: first + "Z",
    track: req.query.track,
    github_file_url:
      "https://github.com/thereson/student_access_endpint/index.js",
    github_repo_url: "https://github.com/thereson/student_access_endpint",
    status_code: 200,
  };
  res.send(JSON.stringify(responce));
});

server.listen(9000, () => {
  console.log("server running on port 9000");
});
