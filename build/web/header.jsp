<%-- 
    Document   : header
    Created on : Jun 1, 2018, 4:39:39 PM
    Author     : test
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
            .nav-bar {
    width: 100%;
    height: 60px;
    box-shadow: 0px 3px 9px -5px;
}
body{
    margin: 0px;
}
        </style>
    </head>
    <body>
        <div class="nav-bar">
            <h3 style="
                float:  left;
                margin-left:  3%;
                text-transform: capitalize;
                "> welcome <%= session.getAttribute("username")%> </h3>
                <form action="/web_project/signout" method="post">
                <button style="float:  right;margin: 1.4% 2%;">sign out</button></form>
        </div>
    </body>
</html>
