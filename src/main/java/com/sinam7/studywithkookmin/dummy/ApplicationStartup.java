package com.sinam7.studywithkookmin.dummy;

import com.sinam7.studywithkookmin.dto.post.PostCreationDto;
import com.sinam7.studywithkookmin.service.AccountService;
import com.sinam7.studywithkookmin.service.PostService;
import com.sinam7.studywithkookmin.user.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ApplicationStartup {


    private final PostService postService;
    private final AccountService accountService;

    @EventListener(ApplicationReadyEvent.class)
    public void generateDummyData() {
        accountService.createOrUpdateUser(new Account("John", "Doe", "john.doe@example.com", "https://example.com/john.jpg"));
        postService.savePost(
                new PostCreationDto("React 스터디 참여하실 분?",
                        """
                                리액트 같이 공부하실 분 찾아요.
                                JS 경험 있는 분과 같이 하고 싶습니다.""",
                        "화요일", "오후 6~7시",
                        new String[]{"React", "Web"},
                        "john.doe@example.com"));
        postService.savePost(
                new PostCreationDto("스프링 스터디원 구합니다.",
                        "Spring Boot 스터디 참여하실 분 구합니다. 기초부터 시작합니다.",
                        "월, 화", "오후 7~8시",
                        new String[]{"Spring Boot"},
                        "john.doe@example.com"));
        postService.savePost(
                new PostCreationDto("백준 같이 하실 분 구해요",
                        """
                                백준 매주 문제 풀고 공유하실 분 구합니다.
                                난이도는 solved.ac 기준 S3~G2 사이로 생각중이에요.
                                비대면 진행도 생각하고 있습니다.
                                """,
                        "목", "오후 8~9시",
                        new String[]{"백준", "algorithm", "알고리즘"},
                        "john.doe@example.com"));

    }
}

