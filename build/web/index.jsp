<%-- 
    Document   : index.jsp
    Created on : Jun 1, 2018, 4:12:45 PM
    Author     : test
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
                response.sendRedirect("welcome.jsp");
            }
        %>
    </body>
</html>
