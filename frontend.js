var imports = require("./server.js");
console.log(imports.table);
console.log(imports.waitlist);
$("#viewTables").on("click",function(){
	$.get("/tables", function(data){
		console.log(data);
	});
});

 	
$("#makeReservation").on("click",function(){
	$.get("/reserve", function(data){

	});
});

$("#home").on("click",function(){
	$.get("/", function(data){

	});
});