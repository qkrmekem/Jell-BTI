package my.jelly.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long cIdx; //댓글 번호
    private String cContent; //댓글 내용
    private String cWriter; //댓글 작성자
    private Long bIdx; //원글 번호
    private LocalDateTime cDate; //댓글 작성 시간
}
