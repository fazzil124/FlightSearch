/**
 * 
 */

var arr = {
	"request" : {
		"slice" : [ {
			"origin" : "DUB",
			"destination" : "DXB",
			"date" : "2015-02-28",
			"preferredCabin" : "COACH",
			"alliance" : "STAR"
		}, {
			"origin" : "DXB",
			"destination" : "DUB",
			"date" : "2015-03-11"
		} ],
		"passengers" : {
			"adultCount" : 1,
			"infantInLapCount" : 0,
			"infantInSeatCount" : 0,
			"childCount" : 0,
			"seniorCount" : 0
		},
		"solutions" : 200,
		"refundable" : true
	}
};

$
		.ajax({
			url : 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDp146UsLz8R6rVv5a4TSsMzBZkIm5FX8o',
			type : 'POST',
			data : JSON.stringify(arr),
			contentType : 'application/json; charset=utf-8',
			dataType : 'xml',
			async : false,
			success : function(msg) {
				$('#loading').hide();
				var obj = JSON.parse(msg);
				alert(obj.kind.requestId);
				$('#flights-display').apend(obj.kind.trips.kind.requestId);
				
			}

		});
