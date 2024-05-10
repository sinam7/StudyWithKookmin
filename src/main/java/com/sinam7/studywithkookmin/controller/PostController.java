package com.sinam7.studywithkookmin.controller;

import com.sinam7.studywithkookmin.dto.PostCreationDto;
import com.sinam7.studywithkookmin.dto.PostDto;
import com.sinam7.studywithkookmin.dto.PostUpdateDto;
import com.sinam7.studywithkookmin.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/save")
    public PostDto savePost(@ModelAttribute PostCreationDto creationDto) {
        Long result = postService.savePost(creationDto); // TODO: how to add user's account id
        return postService.getPost(result);
    }

    @GetMapping("/{postId}")
    public PostDto getPost(@PathVariable Long postId) {
        return postService.getPost(postId);
    }

    @PostMapping("/update/{postId}")
    public PostDto updatePost(@PathVariable Long postId, @ModelAttribute PostUpdateDto updateDto) {
        postService.updatePost(postId, updateDto);
        return postService.getPost(postId);
    }

    @DeleteMapping("/delete/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePost(postId); // TODO Response OK
    }
}


