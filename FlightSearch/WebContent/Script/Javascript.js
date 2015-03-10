/** ********************* Form Validation**************** */
function validateForm() {
	var str = document.getElementById("dateret").value;
	var end = document.forms["search"].retdate.value;
	var year = str.substring(0, 4);
	var month = str.substring(5, 7);
	var date = str.substring(8, 10);
	var endYear = end.substring(0, 4);
	var endMonth = end.substring(5, 7);
	var endDate = end.substring(8, 10);
	var startDate = new Date(year, month, date);
	var endDate = new Date(endYear, endMonth, endDate);

	// var startDate = new Date($('#depdate').val());
	// var endDate = new Date($('#retdate').val());
	var error = $('#error');
	if (error != null) {
		error.empty();
		var error = $('#error');
	}
	$("#error").hide();
	var form = document.forms["search"];
	if (form.from.selectedIndex == form.to.selectedIndex) {
		error.append("<li>Departure and destination are same</li>");
		$("#error").show(500);
		document.search.to.focus();
		return false;
	} else if (startDate == endDate) {
		$("#error").show(500);
		error
				.append("<li>Return date should be more than travelling date </li>");
		document.search.retdate.focus();
		return false;
	} else if (startDate > endDate) {
		$("#error").show(500);
		error
				.append("<li>Return date should be more than travelling date </li>");
		document.search.retdate.focus();
		return false;
	}
}

/** ********************Customization of text fields************** */
$(document).ready(function() {
	$("input").css("background-color", "#fafdfd");
	$("input").focus(function() {
		$(this).css("background-color", "#fafdfd");
	});
});

$('input[type="checkbox"]').on('change', function() {
	$('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

/********************* for drop down menu *********************/
$(document).ready(function() {
	setTimeout(function() {
		$('#loading').hide();
	}, 20000);
});

/** ***************one way clicking function********************** */
$(document).ready(function() {
	$('#twoplusstops').prop('checked', true);
	$("#dateret").show();
	$(".dummy").hide();
	$('input[type="radio"]').click(function() {
		if ($(this).attr("value") == "oneway") {
			$(".ret").hide(500);
			$(".dummy").show(1500);
		} else {
			$(".ret").show(500);
			$(".dummy").hide();
		}
	});
	$('input[type="checkbox"]').click(function() {
		if ($(this).attr("value") == "direct") {
			$('#onestop').prop('checked', false);
			$('#twoplusstops').prop('checked', false);
		}
		if ($(this).attr("value") == "onestop") {
			$('#direct').prop('checked', false);
			$('#twoplusstops').prop('checked', false);
		}
		if ($(this).attr("value") == "twoplusstops") {
			$('#direct').prop('checked', false);
			$('#onestop').prop('checked', false);
		}
	});
});

/** **************** slider amount value *********************** */
$(document).ready(function() {
	$("#amountval").html($("#amount").val());
	$("#amount").mousemove(function(e) {
		$("#amountval").html($(this).val());
	});
});

/** *********** slider time travel value ********************* */
$(document).ready(function() {
	var totaltime = $("#timedepslide").val();
	var hours = parseInt(totaltime / 60);
	var min = totaltime % 60;
	if (hours == 0 && min == 0) {
		$("#timedep").html('00:00');
	}
	if (hours != 0 && min == 0) {
		$("#timedep").html(hours + ':00');
	}
	if (hours == 0 && min != 0) {
		$("#timedep").html('00:' + min);
	}
	if (hours != 0 && min != 0) {
		$("#timedep").html(hours + ':' + min);
	}
	$("#timedepslide").mousemove(function(e) {
		totaltime = $("#timedepslide").val();
		hours = parseInt(totaltime / 60);
		min = totaltime % 60;
		if (hours == 0 && min == 0) {
			$("#timedep").html('00:00');
		}
		if (hours != 0 && min == 0) {
			$("#timedep").html(hours + ':00');
		}
		if (hours == 0 && min != 0) {
			$("#timedep").html('00:' + min);
		}
		if (hours != 0 && min != 0) {
			$("#timedep").html(hours + ':' + min);
		}
	});
});

/** ******************** total travel time value ******************** */
$(document).ready(function() {
	var totaltime = $("#timetravelslide").val();
	var hours = parseInt(totaltime / 60);
	var min = totaltime % 60;
	if (hours == 0 && min == 0) {
		$("#timetravel").html('00:00');
	}
	if (hours != 0 && min == 0) {
		$("#timetravel").html(hours + ':00');
	}
	if (hours == 0 && min != 0) {
		$("#timetravel").html('00:' + min);
	}
	if (hours != 0 && min != 0) {
		$("#timetravel").html(hours + ':' + min);
	}
	$("#timetravelslide").mousemove(function(e) {
		totaltime = $("#timetravelslide").val();
		hours = parseInt(totaltime / 60);
		min = totaltime % 60;
		if (hours == 0 && min == 0) {
			$("#timetravel").html('00:00');
		}
		if (hours != 0 && min == 0) {
			$("#timetravel").html(hours + ':00');
		}
		if (hours == 0 && min != 0) {
			$("#timetravel").html('00:' + min);
		}
		if (hours != 0 && min != 0) {
			$("#timetravel").html(hours + ':' + min);
		}
	});
});