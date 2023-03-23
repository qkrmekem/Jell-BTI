package my.jelly.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class KakaoVO {
    @Id
    @Column(length = 200)
    private String kEmail; //유저 이메일

    @Column(nullable = false, length = 100)
    private String kNick; //유저 닉네임
}
