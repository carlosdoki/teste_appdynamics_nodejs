var express = require("express");
var app = express();

require("appdynamics").profile({
  controllerHostName: "",
  controllerPort: 8090,
  controllerSslEnabled: false, // Set to true if controllerPort is SSL
  accountName: "customer1",
  accountAccessKey: "", //required
  applicationName: "Node-teste",
  tierName: "backend",
  nodeName: "node1",
  // logging: {
  //   logfiles: [
  //     {
  //       root_directory: "/Users/carlosdoki/Projetos/teste/logs",
  //       filename: "echo_%N.log",
  //       level: "TRACE",
  //       max_size: 5242880,
  //       max_files: 10,
  //       // outputType: "console", // Set this parameter if you want to log to STDOUT/STDERR. Omit this parameter if you want to log to a file.
  //     },
  //   ],
  // },
});

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
