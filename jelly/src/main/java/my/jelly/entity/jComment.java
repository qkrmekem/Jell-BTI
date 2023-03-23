package my.jelly.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class jComment extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bIdx")
    private jBoard BoardVO; //평가할 젤리 정보 //연관 관계 지정

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long cIdx; //댓글 번호

    private String cContent; //댓글 내용

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="mAccount") //name = 생성될 column 명
    private Member MemberVO; //댓글 작성자 정보
}
