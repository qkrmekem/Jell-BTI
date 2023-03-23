package my.jelly.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(value = {AuditingEntityListener.class})
@Getter
public class BaseEntity {
    //[입력날짜] 처리 쉽게 하려고 베이스로 따로 생성함
    @CreatedDate
    @Column(name="insertDate", updatable = false)
    private LocalDateTime insertDate;
}
