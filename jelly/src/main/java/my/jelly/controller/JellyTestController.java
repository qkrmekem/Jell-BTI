package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.service.JellyTestService;
import my.jelly.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class JellyTestController {
    @Autowired
    MemberService memberService;

    @Autowired
    JellyTestService jellyTestService;

    // 젤리테스트결과 받아오는 컨트롤러

    // 1. 회원의 젤리 타입을 먼저 확인 (신규 테스트인지, 기존 테스트인지 확인하기 위함.)
    @GetMapping("/jellBTI")
    public boolean userTestCheck(@RequestParam String mEmail) throws ParseException {
        System.out.printf("호출완료" + mEmail);
        boolean bool = memberService.searchUserJellyType(mEmail);
        System.out.printf("=====================True or False===================== : " + bool);
        return bool;
    }

    // 2. 테스트 결과 젤리 타입 받아서 회원에 저장
    @PostMapping("/jResult")
    public void callJellyResult(@RequestParam String mJelly, HttpServletRequest request) throws ParseException {
        System.out.println("프론트에서 젤리 결과 가져오기 : " + mJelly);
        HttpSession session = request.getSession(false);
        Member member = (Member) session.getAttribute("userInfo");

        System.out.println("유저 정보 꺼내오기 성공 " + member);

        jellyTestService.callJellyResult(mJelly, member);
    }

    // 3. 세션에서 회원 정보를 꺼내와 해당 젤리 테스트 결과를 내려줌
    @GetMapping("/jResult")
    public Map<String, String> returnJellyResult(HttpServletRequest request) throws ParseException {
        Map<String, String> map = new HashMap<>();

        HttpSession session = request.getSession(false);
        Member member = (Member) session.getAttribute("userInfo");

        map = jellyTestService.backJellyResult(member);

        return map;
    }

}
