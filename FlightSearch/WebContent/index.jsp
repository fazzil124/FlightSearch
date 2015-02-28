<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Flight Search.com</title>

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"
	type="text/javascript"></script>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
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
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://cdn.kendostatic.com/2014.3.1411/js/kendo.all.min.js"></script>
<script src="Script/jquery-1.11.2.js"></script>
<script type="text/javascript" src="Script/Javascript.js"></script>
<script type="text/javascript" src="Script/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="CSS/Style.css">
<link rel="stylesheet" href="CSS/styles.css">
</head>
<body onload="Slider()" onload="load()">
	<div id="header">
		<a href="index.jsp"><img id="logo" src="Images/logo.png"></a>
	</div>
	<div id='cssmenu'>
		<ul>
			<li class='active'><a href='#'><span>Flights</span></a></li>
			<li><a href='#'><span>Hotel</span></a></li>
			<li><a href='#'><span>Cars</span></a></li>
			<li class='last'><a href='#'><span>Contact</span></a></li>
		</ul>
	</div>
	<div id="content">
		<div class="slides">
			<img class="slider" id="2" src="Images/2.jpg" /> <img class="slider"
				id="3" src="Images/3.jpg" /> <img class="slider" id="4"
				src="Images/4.jpg" /> <img class="slider" id="5" src="Images/5.jpg" />
			<img class="slider" id="6" src="Images/6.jpg" /> <img class="slider"
				id="7" src="Images/7.jpg" /> <img class="slider" id="8"
				src="Images/8.jpg" /> <img class="slider" id="9" src="Images/9.jpg" />
			<img class="slider" id="10" src="Images/10.jpg" /> <img
				class="slider" id="11" src="Images/11.jpg" /> <img class="slider"
				id="12" src="Images/12.jpg" />
		</div>

		<div id="search">
			<form action="Flights.jsp" method="post" name="search" id="Search">
				<table>
					<tr id="errortab";">
						<ul id="error" style="display: none;"></ul>
					</tr>
					<tr>
						<td id="selection">
						<label>From</label> <select name="from" id="from">
						</select>
						</td>
						<td id="selection"><label>To</label> <select name="to" id="to"></select>
						</td>
						<td id="selection"><label>Departure Date:</label> <input id="date" name="depdate" />
						</td>
						<td id="selection"><label>Return Date:</label> <input id="dateret" name="retdate" />
						</td>
						<td><label>One Way </label><input type="radio" name="trip" id="oneway"
							value="oneway" />
						</td>
						<td><label>Round Way</label> <input type="radio" name="trip" id="roundway"
							value="roundtrip" checked />
						</td>

					</tr>
				</table>
				<table>
					<tr>
						<td id="selections"><label>Adult:</label> <select name="adult" id="adult">
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
						<td id="selections"><label>Children:</label> <select name="child" id="child">
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
						</select>
						</td>
						<td id="selections"><label>Infant:</label> <select name="infant" id="infant">
								<option>0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
						</select> </select>
						</td>
						<td id="selections"><label>Class:</label> <select name="class" id="class">
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
	</div>
	<div id="footer"></div>
</body>
</html>