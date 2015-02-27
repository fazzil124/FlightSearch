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

/********************************** Populate the drop down menu *************************************/

$.ajax({
	type : "GET",
	url : "xml/Flights.xml",
	dataType : "xml",
	success : function(xml) {
		var select1 = $('#from');
		var select2 = $('#to');
		$(xml).find('Airport').each(
				function() {
					var name = $(this).find('name').text();
					var IATA = $(this).find('IATA').text();
					select1.append("<option value=''>" + IATA + " - " + name
							+ "</option>");
					select2.append("<option value=''>" + IATA + " - " + name
							+ "</option>");
				});
	}
});

/********************************************** date *********************************************/
$(document).ready(function() {
	$("#date").kendoDatePicker({
		value : new Date(),
		dates : [ new Date(2000, 10, 10, 10, 0, 0), new Date(2000, 10, 30) ]
	// can manipulate month template depending on this array.
	});
	$("#dateret").kendoDatePicker({
		value : new Date(),
		dates : [ new Date(2000, 10, 10, 10, 0, 0), new Date(2000, 10, 30) ]
	// can manipulate month template depending on this array.
	});
});
$(document).ready(function () {
    
    $('#dateret').datepicker({
        format: "yyyy/mm/dd"
    }); 
});