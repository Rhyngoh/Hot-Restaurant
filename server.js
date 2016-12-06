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
   for(i in table){
        res.json(table[i]);
    }
    for(i in waitlist){
        res.json(waitlist[i]);
    }
});


app.get("/api/waitlist", function(req, res) {
  var aWaitlist = req.params.waitlist;

  if (aWaitlist) {
    console.log(aWaitlist);

    for (var i = 0; i < waitlist.length; i++) {
      if (aWaitlist === waitlist[i].routeName) {
        res.json(waitlist[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(waitlist);
  }
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