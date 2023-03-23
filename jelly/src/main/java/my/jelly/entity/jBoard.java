package my.jelly.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@DynamicInsert
public class jBoard extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE) //mysql에서는 IDENTITY
    private Long bIdx; //글 번호

    @Column(nullable = false, length = 300)
    private String bTitle; //글 제목
    @Column(nullable = false, length = 3000)
    private String bContent; //글 내용

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="mAccount") //name = 생성될 column 명
    private Member MemberVO; //작성자 정보

}
