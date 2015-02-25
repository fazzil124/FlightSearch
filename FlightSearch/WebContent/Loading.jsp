<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="CSS/Style.css">
<title>Insert title here</title>
</head>
<body onLoad="timer=setTimeout(function(){ window.location='Flights.jsp';}, 20000)">
	<div id="loading">
		<img src="Images/waiting.gif" />
		
	</div>
<%-- 	<% response.setHeader("Pragma","no-cache");%>  --%>
<%-- <% response.setHeader("Cache-Control","no-store");%>  --%>
<%-- <% response.setDateHeader("Expires",-1);%>  --%>
</body>
</html>