/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.simple.JSONObject;

/**
 *
 * @author test
 */
@WebServlet(urlPatterns = {"/register"})
public class register extends HttpServlet {
 @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
         resp.setContentType("application/json");
        
        resp.setCharacterEncoding("utf-8");
        
        
        PrintWriter out=resp.getWriter();
        String name=req.getParameter("name").trim();
        String email=req.getParameter("email").trim();
        String phone=req.getParameter("phone").trim();
        String dob=req.getParameter("dob").trim();
        String gender=req.getParameter("gender").trim();
        String pass=req.getParameter("pass").trim();
        
              try{  
           
                Class.forName("com.mysql.jdbc.Driver");  
                Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/soical","root","");  
                Statement stmt=con.createStatement();  
                boolean rs=stmt.execute("insert into register values(null,'"+name+"','"+email+"','"+phone+"','"+dob+"','"+gender+"','"+pass+"') WHERE NOT EXISTS (Select * From register WHERE emailid ='"+email+"')");  
                
                 HttpSession session = req.getSession();
                
                if(rs)
                {
                    session.setAttribute("username", name);
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
