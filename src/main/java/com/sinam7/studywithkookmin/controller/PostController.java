package com.sinam7.studywithkookmin.controller;

import com.sinam7.studywithkookmin.dto.post.PostBriefDto;
import com.sinam7.studywithkookmin.dto.post.PostCreationDto;
import com.sinam7.studywithkookmin.dto.post.PostDto;
import com.sinam7.studywithkookmin.dto.post.PostUpdateDto;
import com.sinam7.studywithkookmin.service.PostService;
import com.sinam7.studywithkookmin.user.Post;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/save")
    public PostDto savePost(@RequestBody PostCreationDto creationDto) {
        Long result = postService.savePost(creationDto);
        return postService.getPost(result);
    }

    @GetMapping
    public List<PostBriefDto> getPostList() {
        return postService.getPostList();
    }

    @GetMapping("/{postId}")
    public PostDto getPost(@PathVariable("postId") Long postId) {
        return postService.getPost(postId);
    }

    @PostMapping("/update/{postId}")
    public PostDto updatePost(@PathVariable("postId") Long postId, @ModelAttribute PostUpdateDto updateDto) {
        postService.updatePost(postId, updateDto);
        return postService.getPost(postId);
    }

    @DeleteMapping("/delete/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePost(postId); // TODO Response OK
    }
}


