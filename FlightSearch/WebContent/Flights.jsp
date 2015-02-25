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
	type="text/javascript" ></script>
<script type="text/javascript" src="Script/Request.js"></script>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>

</head>
<body>
	<div id="header">
		<img id="logo" src="Images/logo.png">
	</div>
	<div id="content">
		<div id="Flight-display-content">
			<div id="sidebar">
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
							<input type="checkbox" name="stops" value="onedirect"
								id="onestop" /> 1 Stop
							<br>
						</tr>
						<tr>
							<input type="checkbox" name="stops" value="twoplusstops"
								id="twoplusstops" checked /> 2+Stops
							<br>
							<hr>
						</tr>
					</table>
				</form>
			</div>
			<div id="flights-display">hi</div>
		</div>
	</div>
	<div id="footer">
	</div>
</body>
</html>