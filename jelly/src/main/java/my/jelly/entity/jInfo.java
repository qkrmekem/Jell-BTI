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
public class jInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long jIdx; //젤리 번호

    @Column(nullable = false, length = 100)
    private String jName; //젤리 이름
    @Column(nullable = false, length = 1000)
    private String jDetail; //젤리 정보

    private String jKcal; //젤리 칼로리
    private String jGram; //젤리 양

    private String jCarbohydrate; // 탄수화물

    private String jProtein; // 단백질

    private String jFat; // 지방

    private String jSugars; // 당류

    private String jSalt; // 나트륨

    private String jCholesterol; // 콜레스테롤

    private Long jPrice; //젤리 가격
    private Long jSweet; //젤리 달콤함
    private Long jSour; //젤리 새콤함
    private Long jHard; //젤리 단단함
    private Long jSoft; //젤리 부드러움
    private Long jSalty; //젤리 짬






}
