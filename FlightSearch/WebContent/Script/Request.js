/**
 * 
 */

var arr = {
	"request" : {
		"passengers" : {
			"kind" : "qpxexpress#passengerCounts",
			"adultCount" : "1",
			"childCount" : "0",
			"infantInLapCount" : "0",
			"infantInSeatCount" : "0",
			"seniorCount" : "0"
		},
		"slice" : [ {
			"kind" : "qpxexpress#sliceInput",
			"origin" : "DUB",
			"destination" : "DXB",
			"date" : "2015-03-05",
			"maxStops" : "2",
			"maxConnectionDuration" : "60",
			"preferredCabin" : "COACH",
			"permittedDepartureTime" : {
				"kind" : "qpxexpress#timeOfDayRange",
				"earliestTime" : "06:00",
				"latestTime" : "23:00"
			},
			
		} ],
		"maxPrice" : "10000",
		"saleCountry" : "EUR",
		"refundable" : "false",
		"solutions" : "500"
	}
};
var select=("#flights-display");
$.ajax({
	url : 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDp146UsLz8R6rVv5a4TSsMzBZkIm5FX8o',
	type : 'POST',
	data : JSON.stringify(arr),
	contentType : 'application/json; charset=utf-8',
	dataType : 'json',
	async : false,
	success : function(msg) {
		var obj = JSON.parse(msg);
		select.apend(obj.airport);
	}
});
