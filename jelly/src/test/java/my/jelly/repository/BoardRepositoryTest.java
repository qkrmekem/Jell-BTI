package my.jelly.repository;

import my.jelly.entity.jBoard;
import my.jelly.service.BoardService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BoardRepositoryTest {
    @Autowired
    private BoardRepository boardRepository;

    @Test
    @Transactional
    void 테스트글모두조회(){
        List<jBoard> board = boardRepository.findAll();
        for(jBoard i : board){
            System.out.println(i);
        }
    }
    @Test
    void 테스트글모두삭제(){
        boardRepository.deleteAll();
    }

}