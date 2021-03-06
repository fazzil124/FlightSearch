function Slider() {
	$(".slides #2").show('fadeIn', 500);
	$(".slides #2").delay(5500).hide('slide', {
		direction : 'left'
	}, 500);

	var sc = 12;
	var count = 2;
	setinterval(function() {
		$(".slides #" + count).show("slide", 500);
		$(".slides #" + count).delay(500).hide("slide", {
			direction : 'left'
		}, 500);

		if (count == sc) {
			count = 1;
		} else {
			count = count + 1;
		}
	}, 1500);
}

/** ******************* Populate the drop down menu ********************* */

$.ajax({
	type : "GET",
	url : "xml/Flights.xml",
	dataType : "xml",
	success : function(xml) {
		var select1 = $('#from');
		var select2 = $('#to');
		var select3 = $('#from1');
		var select4 = $('#to1');
		$(xml).find('Airport').each(
				function() {
					var name = $(this).find('name').text();
					var IATA = $(this).find('IATA').text();
					select1.append("<option value='" + IATA + " - " + name
							+ "'>" + IATA + " - " + name + "</option>");
					select2.append("<option value='" + IATA + " - " + name
							+ "'>" + IATA + " - " + name + "</option>");
					select3.append("<option value='" + IATA + " - " + name
							+ "'>" + IATA + " - " + name + "</option>");
					select4.append("<option value='" + IATA + " - " + name
							+ "'>" + IATA + " - " + name + "</option>");
				});
	}
});

/** *************************** date ************************ */
$(document).ready(function() {
	$("#date").kendoDatePicker({
		format : "yyyy/MM/dd",
		min : new Date(),
		value : new Date(),
		dates : [ new Date(2000, 10, 10, 10, 0, 0), new Date(2000, 10, 30) ]
	// can manipulate month template depending on this array.
	});
	$("#dateret").kendoDatePicker({
		format : "yyyy/MM/dd",
		min : new Date(),
		value : new Date(),
		dates : [ new Date(2000, 10, 10, 10, 0, 0), new Date(2000, 10, 30) ]
	// can manipulate month template depending on this array.
	});
});
