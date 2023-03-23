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
public class jRate {
    //id문제로 일단 생성
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long rIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jIdx")
    private jInfo jInfoVO; //평가할 젤리 정보

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mAccount")
    private Member MemberVO; //평점 남긴 사용자 정보

    @Column(nullable = false)
    private int jStar; //젤리 평점

    @Column(nullable = false)
    private String rContent;

}
