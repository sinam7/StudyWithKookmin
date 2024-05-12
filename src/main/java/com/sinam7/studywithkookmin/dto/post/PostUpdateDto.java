package com.sinam7.studywithkookmin.dto.post;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class PostUpdateDto {

    private String title;
    private String content;
    private String day;
    private String time;
    private List<String> tags;

}
