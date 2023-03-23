package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class MemberService {

    private final MemberRepository memberRepository;
    public Member findUser(String mEmail){ //email로 유저 객체 찾아오기 : memberservice로 빼기
        return memberRepository.findBymEmail(mEmail);
    }


}
