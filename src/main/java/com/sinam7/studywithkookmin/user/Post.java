package com.sinam7.studywithkookmin.user;

import com.sinam7.studywithkookmin.dto.post.PostUpdateDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "authorId")
    private Account author;

    @ElementCollection
    private List<String> tags;
    private String title;

    private String content;

    private String day;
    private String time;

    @CreationTimestamp
    private Timestamp createDate;

    @UpdateTimestamp
    private Timestamp lastModifiedDate;

    public Post(Account author, String title, String content, String day, String time, List<String> tags) {
        this.author = author;
        this.tags = tags;
        this.day = day;
        this.time = time;
        this.title = title;
        this.content = content;
    }

    public void update(PostUpdateDto updateDto) {
        this.title = updateDto.getTitle();
        this.day = updateDto.getDay();
        this.time = updateDto.getTime();
        this.content = updateDto.getContent();
        this.tags = updateDto.getTags();

    }
}
