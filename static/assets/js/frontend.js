$("#viewTables").on("click",function(){
	$.get("/tables", function(data){
	}).done(function(){
		$.get("/api/table", function(dataTwo){
			for (var i = 0; i < dataTwo.length; i++){
				//show the divs for each table reservation
				$("#tableArea").append("<div id = 'table" +dataTwo[i]+"'></div>");
				$("#table"+dataTwo[i]).append("<h2>"+(i+1)+" | " + dataTwo[i].customerID);
			}
		});

		$.get("/api/waitlist", function(imports){
			for (var i = 0; i < imports.length; i++){
				//show the divs for each table reservation
				$("#waitlistArea").append("<div id = 'wait" +imports[i]+"'></div>");
				$("#wait"+imports[i]).append("<h2>"+(i+1)+" | " + imports[i].customerID);
			}
		})	;	

	})
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
});
$("#makeReservation").on("click",function(){
	$.get("/reserve", function(data){

	});
});

$("#home").on("click",function(){
	$.get("/", function(data){

	});
});

