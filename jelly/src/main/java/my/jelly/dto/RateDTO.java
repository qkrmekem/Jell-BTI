package my.jelly.dto;

import lombok.*;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RateDTO {
    private Long jIdx; //젤리 번호
    private String mNick; //평점 매긴 사람 닉네임
    private String mJelly; //평점 매긴 사람 젤리 타입
    private int jStar; //평점
}
