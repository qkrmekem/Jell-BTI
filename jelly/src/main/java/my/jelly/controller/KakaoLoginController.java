package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import my.jelly.service.KakaoAPI;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;

@RequiredArgsConstructor
@Controller
@RequestMapping("/login")
public class KakaoLoginController {

    @Autowired
    private final KakaoAPI kakaoAPI;


    @GetMapping("")
    public String main(){
        return "login";
    }

    @GetMapping("/kakao")
    public String kakaoLogin(@RequestParam String code, HttpSession session) {
        System.out.println("code: "+ code);
        String access_Token = kakaoAPI.getAccessToken(code);
        System.out.println("Controller access Token: "+ access_Token);
        HashMap<String, Object> userInfo = kakaoAPI.getUserInfo(access_Token);
        System.out.println("Controller userInfo: "+userInfo);


        if (userInfo.get("email") != null){
            session.setAttribute("nickname",userInfo.get("nickname"));
            session.setAttribute("access_Token", access_Token);
        }

        return "index";
    }
}
