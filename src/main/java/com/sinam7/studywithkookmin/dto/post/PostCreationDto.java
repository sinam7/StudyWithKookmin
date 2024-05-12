package com.sinam7.studywithkookmin.dto.post;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostCreationDto {

    private String title;
    private String content;
    private String day;
    private String time;
    private String[] tags;
    private String authorEmail;

}
