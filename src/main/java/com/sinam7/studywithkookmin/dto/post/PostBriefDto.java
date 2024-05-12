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
public class PostBriefDto {

    private Long id;
    private String title;
    private String content;
    private String day;
    private String time;
    private List<String> tags;
    private Timestamp lastModifiedDate;

    public static PostBriefDto convertToDto(Post post) {
        return PostBriefDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .day(post.getDay())
                .time(post.getTime())
                .tags(post.getTags())
                .lastModifiedDate(post.getLastModifiedDate())
                .build();
    }
}
