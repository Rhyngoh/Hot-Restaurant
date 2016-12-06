var imports = require("./server.js");

$("#viewTables").on("click",function(){
	$.get("/tables", function(data){
		console.log(data);
	}).done(function(){
		for (var i = 0; i < imports.table.length; i++){
			//show the divs for each table reservation
			$("#tableArea").append("<div id = 'table" +imports.table[i]+"'></div>");
			$("#table"+imports.table[i]).append("<h2>"+(i+1)+" | " + imports.table[i].customerID);
		}
		for (var i = 0; i < imports.waitlist.length; i++){
			//show the divs for each table reservation
			$("#waitlistArea").append("<div id = 'wait" +imports.waitlist[i]+"'></div>");
			$("#wait"+imports.waitlist[i]).append("<h2>"+(i+1)+" | " + imports.waitlist[i].customerID);
		}
	}
	)
});
$("#addCustomer").on("click", function() {
  var newCustomer = {
    customerName: $("#reserve_name").val().trim(),
    phoneNumber: $("#reserve_phone").val().trim(),
    customerEmail: $("#reserve_email").val().trim(),
    customerID: $("#reserve_uniqueID").val().trim()
  };

  $.post("http://localhost:3000/api/reserve", newCustomer)
  .done(function(data) {
    console.log(data);
    alert("Adding customer...");
  });
 	
$("#makeReservation").on("click",function(){
	$.get("/reserve", function(data){

	});
});

$("#home").on("click",function(){
	$.get("/", function(data){

	});
});