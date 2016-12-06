var imports = require("./server.js");

console.log(imports.table);


$("#viewTables").on("click",function(){
	$.get("/tables", function(data){
		console.log(data);
	}).done(function(){
		for (var i = 0; i < imports.table.length; i++){
			//show the divs for each table reservation
			$("#tableArea").append("<div id = '" +imports.table[i]+"'></div>");
			$("#"+imports.table[i]).append("<h2>"+(i+1)+" | " + imports.table[i].customerID);
		}
		for (var i = 0; i < imports.waitlist.length; i++){
			//show the divs for each table reservation
			$("#waitlistArea").append("<div id = '" +imports.waitlist[i]+"'></div>");
			$("#"+imports.waitlist[i]).append("<h2>"+(i+1)+" | " + imports.waitlist[i].customerID);
		}
	}
	)
});

 	
$("#makeReservation").on("click",function(){
	$.get("/reserve", function(data){

	});
});

$("#home").on("click",function(){
	$.get("/", function(data){

	});
});