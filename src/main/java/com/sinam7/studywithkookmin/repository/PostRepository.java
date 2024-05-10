package com.sinam7.studywithkookmin.repository;

import com.sinam7.studywithkookmin.user.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
