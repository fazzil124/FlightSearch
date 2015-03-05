/**
 * *********************************** Form Validation
 * *************************************
 */
function validateForm() {
	var error = $('#error');
	if (error != null) {
		error.empty();
		var error = $('#error');
	}
	$("#error").hide();
	var frm = document.forms["search"];
	if (frm.from.selectedIndex == frm.to.selectedIndex) {
		var name = frm.from.value;
		error.append(name + "<li>Departure and destination are same</li>");
		$("#error").show(500);
		document.search.to.focus();
		return false;
	} else if (frm.depdate.value == frm.retdate.value) {
		$("#error").show(500);
		error
				.append("<li>Return date should be more than travelling date </li>");
		document.search.retdate.focus();
		return false;
	} else if (frm.depdate.value > frm.retdate.value) {
		$("#error").show(500);
		error
				.append("<li>Return date should be more than travelling date </li>");
		document.search.retdate.focus();
		return false;
	}
}

/**
 * *************************************Customization of text fields
 * **********************
 */
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
$(document).setTimeout(function() {
    $('#loading').hide();
}, 1000);