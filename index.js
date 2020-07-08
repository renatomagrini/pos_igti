var app = require('./config/express');
const PORT = process.env.PORT||'8080';


var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});