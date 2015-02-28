<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Search Results</title>
<link rel="stylesheet" type="text/css" href="CSS/Style.css">
<script src="Script/jquery-1.11.2.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"
	type="text/javascript"></script>
<!-- <script type="text/javascript" src="Script/Request.js"></script> -->
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.common.min.css">
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.rtl.min.css">
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.default.min.css">
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.dataviz.min.css">
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.dataviz.default.min.css">
<link rel="stylesheet"
	href="http://cdn.kendostatic.com/2014.3.1411/styles/kendo.mobile.all.min.css">
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://cdn.kendostatic.com/2014.3.1411/js/kendo.all.min.js"></script>
<script type="text/javascript" src="Script/Javascript.js"></script>
<script type="text/javascript" src="Script/jquery.js"></script>
<link rel="stylesheet" href="CSS/styles.css">

<link rel="stylesheet" href="//code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$(function() {
			$("#slider-range-min").slider({
				range : "min",
				value : 37,
				min : 1,
				max : 700,
				slide : function(event, ui) {
					$("#amount").val("$" + ui.value);
				}
			});
			$("#amount").val("$" + $("#slider-range-min").slider("value"));
		});
	});
</script>
</head>
<body>
	<div id="header">
		<img id="logo" src="Images/logo.png">
	</div>
	<div id='cssmenu'>
		<ul>
			<li class='active'><a href='#'><span>Flights</span></a></li>
			<li><a href='#'><span>Hotel</span></a></li>
			<li><a href='#'><span>Cars</span></a></li>
			<li class='last'><a href='#'><span>Contact</span></a></li>
		</ul>
	</div>
	<div id="search1">
		<form action="Loading.jsp" method="post" name="search" id="Search1">
			<table>
				<tr id="errortab";">
					<ul id="error" style="display: none;"></ul>
				</tr>
				<tr>
					<td>From <select name="from" id="from">
					</select>
					</td>
					<td>To <select name="to" id="to"></select>
					</td>
					<td>Departure Date: <input id="date" name="depdate" />
					</td>
					<td>Return Date: <input id="dateret" name="retdate" />
					</td>
					<td>One Way <input type="radio" name="trip" id="oneway"
						value="oneway" />
					</td>
					<td>Round Way <input type="radio" name="trip" id="roundway"
						value="roundtrip" checked />
					</td>

				</tr>
			</table>
			<table>
				<tr>
					<td id="selections">Adult: <select name="adult" id="adult">
							<option selected>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
					</select>
					</td>
					<td id="selections">Children: <select name="child" id="child">
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
					</select>
					</td>
					<td id="selections">Infant: <select name="infant" id="infant">
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
					</select> </select>
					</td>
					<td id="selections">Class: <select name="class" id="class">
							<option>Coach</option>
							<option>Premium Economy</option>
							<option>Business</option>
							<option>First</option>
					</select>
					</td>

					<td><input type="submit" value="Search"
						onClick="return validateForm()" class="myButton" /></td>
				</tr>

			</table>
		</form>
	</div>
	<div id="Flight-display-content">
		<div id="sidebar">
			<img src="Images/loading.gif" />
			<form action="" name="Sort">
				<table>
					<tr>
						<h3>Stops:</h3>
					</tr>
					<tr>
						<input type="checkbox" name="stops" value="direct" id="direct" />
						Direct
						<br>
					</tr>
					<tr>
						<input type="checkbox" name="stops" value="onedirect" id="onestop" />
						1 Stop
						<br>
					</tr>
					<tr>
						<input type="checkbox" name="stops" value="twoplusstops"
							id="twoplusstops" checked /> 2+Stops
						<br>
						<hr>
					</tr>
					<tr>
						<p>
							<label for="amount">Maximum price:</label> <input type="text"
								id="amount" readonly
								style="border: 0; color: #f6931f; font-weight: bold; background-color:#3498DB;" >
						</p>
						<div id="slider-range-min"></div>
					</tr>
				</table>
			</form>
		</div>
		<div id="flights-display">hi</div>
	</div>
	<div id="footer">hi</div>
</body>
</html>