package my.jelly.service;

import my.jelly.entity.Member;
import my.jelly.entity.jBoard;
import my.jelly.entity.jComment;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.CommentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.IntStream;

@SpringBootTest
class CommentServiceTest {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private MemberService memberService;
    @Test
    @Transactional
    @Commit
    void 테스트댓글등록(){
        IntStream.rangeClosed(1,100).forEach(i->{
            jComment comment = new jComment();
            long bIdx = (long)(Math.random()*50)+1;
            jBoard board = boardRepository.findBybIdx(bIdx);
            Member member = memberService.findUser(("test" + (Math.random()*50+1) + "@kakao.com"));

            comment.setBoardVO(board);
            comment.setCContent("테스트 댓글 " + i);
            comment.setMemberVO(member);
            System.out.println(board);
            System.out.println(member);
            commentRepository.save(comment);

        });
        System.out.println("댓글 등록 완료");
    }
    @Test
    void 댓글모두삭제(){
        commentRepository.deleteAll();
    }
}