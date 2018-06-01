/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;

/**
 *
 * @author test
 */
@WebServlet(urlPatterns = {"/data_tmp.json"})
public class data_tmp extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        
        
        resp.setContentType("application/json");
        resp.setCharacterEncoding("utf-8");
        PrintWriter out = resp.getWriter();


        JSONObject json = new JSONObject();

        json.put("12983", 123);
        
    
       

    
    out.print(json.toString());
    
    
      
        
        
        
        
    }

  
}
