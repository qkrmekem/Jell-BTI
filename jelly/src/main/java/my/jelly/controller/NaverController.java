package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.entity.Member;
import my.jelly.service.NaverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
public class NaverController {

    private NaverService naverService;

    public NaverController(NaverService naverService) {
        this.naverService = naverService;
    }

    // naver로그인 api 클라이언트 id
    @Value("#{jellyProperty['naver.client-id']}")
    private String clientId;

    @RequestMapping("/oauth2/authorization/naver")
    public Map<String, String> login(@RequestParam(value = "code") String code, HttpSession session) throws Exception {
        System.out.println("네이버 로그인 안녕하세요");
        log.info("code ={}", code);
        String accecc_token = naverService.getToken(code, session);
        Map<String, String> map = new HashMap<>();
        map.put("token", accecc_token);
        return map;
    }

    @RequestMapping("/oauth/login/naver/userInfo")
    public Map<String, Object> userInfo(
            @RequestParam(value = "token", required = false) String token,
            HttpServletRequest request) throws Exception {
        Member userInfo = naverService.getUserInfo(token);
        Map<String, Object> map = new HashMap<>();

        log.info("userInfo ={}", userInfo);

        if (userInfo != null) {
            HttpSession session = request.getSession();
            session.setAttribute("userInfo", userInfo);
            map.put("userInfo", userInfo);

            // 로그인 성공 확인용
            log.info("로그인 성공!!!, userinfo={}", userInfo);
            return map;
        }
        map.put("status", HttpStatus.BAD_REQUEST.toString());

        return map;
    }

}