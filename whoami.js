var express = require("express");
var app = express();

// On page request return a JSON such as :
// {"ipaddress":"162.171.47.27","language":"en-US","software":"Macintosh; Intel Mac OS X 10_11_5"}
app.get("/*", function(req, res){
  var ip = req.connection.remoteAddress;
  var lang = req.headers["accept-language"].split(",")[0];
  var sysDetails = req.headers["user-agent"].split(/[()]/)[1];
  var data = {ipaddress : ip, language : lang, software : sysDetails }
  res.json(data);
});

// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on port " +  port);
});
