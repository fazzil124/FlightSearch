/**
 * *********************************** Form Validation
 * *************************************
 */
function validateForm() {
	var startDate = new Date($('#depdate').val());
	var endDate = new Date($('#retdate').val());
	var error = $('#error');
	if (error != null) {
		error.empty();
		var error = $('#error');
	}
	$("#error").hide();
	var form = document.forms["search"];
	if (form.from.selectedIndex == form.to.selectedIndex) {
		var name = form.from.value;
		error.append(name + "<li>Departure and destination are same</li>");
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

/** **************************Customization of text fields************** */
$(document).ready(function() {
	$("input").css("background-color", "#fafdfd");
	$("input").focus(function() {
		$(this).css("background-color", "#fafdfd");
	});
});

$('input[type="checkbox"]').on('change', function() {
	$('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

/**
 * ********************************* for drop down menu
 * ************************************
 */
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
			$(".ret").hide();
			$(".dummy").show();
		} else {
			$(".ret").show();
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

/****************** slider amount value ************************/
$(document).ready(function() {
	$("#valBox").html($("#amount").val());
	$("#amount").mousemove(function(e) {
		$("#valBox").html($(this).val());
	});
});