package my.jelly.service;

import my.jelly.dto.BoardDTO;
import my.jelly.entity.Member;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BoardServiceTest {
    @Autowired
    MemberService memberService;
    @Autowired
    BoardRepository boardRepository;

    @Test
    @Transactional
    @Commit
    void 테스트게시글등록(){
        IntStream.rangeClosed(1, 50).forEach(i -> {
            jBoard board = new jBoard();
            Member member = memberService.findUser(("test" + i + "@kakao.com"));
            board.setBTitle("글 제목" + i);
            board.setBContent("글 내용" + i);
            board.setMemberVO(member);
            boardRepository.save(board);
        });
        System.out.println("글 등록 완료!");
    }

    @Test
    void 회원작성글조회(){
        String user = "test1@kakao.com";
        Member member = memberService.findUser(user);


    }

}