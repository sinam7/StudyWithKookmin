package com.sinam7.studywithkookmin.dto;

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

    private String title;
    private String content;
    private List<String> tags;
    private String authorName;
    private Timestamp createDate;

    public static PostDto convertToDto(Post post) {
        return PostDto.builder()
                .title(post.getTitle())
                .content(post.getContent())
                .tags(post.getTags())
                .authorName(post.getAuthor().getFirstName() + post.getAuthor().getLastName())
                .build();
    }
}
