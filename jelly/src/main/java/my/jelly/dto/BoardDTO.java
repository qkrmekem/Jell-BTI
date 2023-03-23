package my.jelly.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {
    private Long bIdx; //글 번호
    private String bTitle; //글 제목
    private String bContent; //글 내용
    private String bWriter; //글 작성자
    private LocalDateTime bDate; //글 작성시간
    private int replyCount; //댓글 수


}
