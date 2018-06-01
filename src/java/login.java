/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import org.json.simple.JSONObject;

/**
 *
 * @author test
 */
@WebServlet(urlPatterns = {"/login"})
public class login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        
        resp.setCharacterEncoding("utf-8");
        
        
        PrintWriter out=resp.getWriter();
        
        String email=req.getParameter("email").trim();
        String pass=req.getParameter("pass").trim();
        
              try{  
           
                Class.forName("com.mysql.jdbc.Driver");  
                Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/soical","root","");  
                Statement stmt=con.createStatement();  
                ResultSet rs=stmt.executeQuery("select id,name from register where emailid='"+email+"' and password='"+pass+"';");  
                
            HttpSession session = req.getSession();
                
                if(rs.next())
                {
                    session.setAttribute("username", rs.getString(2));
                    resp.sendRedirect("welcome.jsp");
                }
                else
                {
                    resp.sendRedirect("login.html");
                }
                    
                    
           
                
                con.close();  
        
       
       
       
       }catch(Exception e){out.println(e);}  
    }
    
}
