<%-- 
    Document   : welcome
    Created on : Jun 1, 2018, 4:24:14 PM
    Author     : test
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>
<%@include file="game.html" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <%
            if(session.getAttribute("username")==null){
                response.sendRedirect("login.html");
            }else{
                
            }
        %>
    </body>
</html>
