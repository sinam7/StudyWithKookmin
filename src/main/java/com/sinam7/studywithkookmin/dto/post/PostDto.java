package com.sinam7.studywithkookmin.dto.post;

import com.sinam7.studywithkookmin.user.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class PostDto {

    private Long id;
    private String title;
    private String content;
    private String day;
    private String time;
    private List<String> tags;
    private String authorName;
    private Timestamp createDate;
    private Timestamp lastModifiedDate;

    public static PostDto convertToDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .day(post.getDay())
                .time(post.getTime())
                .tags(post.getTags())
                .createDate(post.getCreateDate())
                .lastModifiedDate(post.getLastModifiedDate())
                .authorName(post.getAuthor().getFirstName() + " " + post.getAuthor().getLastName())
                .build();
    }

}