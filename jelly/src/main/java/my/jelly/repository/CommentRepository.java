package my.jelly.repository;

import my.jelly.entity.jComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<jComment, Long> {
}
