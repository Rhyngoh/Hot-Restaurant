// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//============================================================
var table = [
{
	customerName: "Steve",
	phoneNumber: "911",
	customerEmail: "steveChronMan@gmail.com",
	customerID: "Steve The Boss"
}];
var waitlist = [{
	customerName: "June",
	phoneNumber: "8324801234",
	customerEmail: "TheDudeJune@gmail.com",
	customerID: "The Dude June"
}];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/", function(req, res){
  //combining arrays together
    res.json(table.concat(waitlist));
});
// Search for Specific table (or all tables) - provides JSON
app.get("/api/tables", function(req, res){

    res.json(table);
});
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});
app.post("/api/reserve", function(req, res) {
  var newCustomer = req.body;
  newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);
  if(table.length = 5){
  	wishlist.push(newCustomer);
  } else{
  	table.push(newCustomer);
  }
 
  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = {table, waitlist};