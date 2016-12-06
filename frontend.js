$("#viewTables").on("click",function(){
	$.get("/tables", function(data){

	});
});

 	
$("#makeReservation").on("click",function(){
	$.get("/reserve", function(data){

	});
});

$("#home").on("click",function(){
	$.get("/", function(data){

	})
})