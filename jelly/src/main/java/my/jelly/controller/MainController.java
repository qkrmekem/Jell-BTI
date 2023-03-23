package my.jelly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class MainController {

    @RequestMapping("/logout")
    public String logout(HttpSession session){
        session.removeAttribute("access_Token");
        session.removeAttribute("nickname");
        return "index";
    }
}
