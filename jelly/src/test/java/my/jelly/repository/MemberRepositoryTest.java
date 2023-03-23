package my.jelly.repository;

import my.jelly.entity.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.IntStream;

@SpringBootTest
class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;
    Member member = new Member();

    @Test
    @Transactional
    //@Commit : 변경사항 DB 반영
    void 테스트회원등록(){
        IntStream.rangeClosed(1,50).forEach(i->{
            member.setMEmail("test"+i+"@kakao.com");
            member.setMNick("유저"+i);
            member.setMJelly(String.valueOf((int)(Math.random()*5)+1));
            memberRepository.save(member);
        });
        System.out.println("회원등록 완료");
    }
    @Test
    void 모든회원조회(){
        List<Member> mem = memberRepository.findAll();
        for(Member i : mem){
            System.out.println(i);
        }
    }
    @Test
    void 테스트회원모두삭제(){
        memberRepository.deleteAll();
    }
}