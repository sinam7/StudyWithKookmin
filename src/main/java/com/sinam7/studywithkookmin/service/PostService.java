package com.sinam7.studywithkookmin.service;

import com.sinam7.studywithkookmin.dto.post.PostBriefDto;
import com.sinam7.studywithkookmin.dto.post.PostCreationDto;
import com.sinam7.studywithkookmin.dto.post.PostDto;
import com.sinam7.studywithkookmin.dto.post.PostUpdateDto;
import com.sinam7.studywithkookmin.repository.PostRepository;
import com.sinam7.studywithkookmin.user.Post;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final AccountService accountService;

    public Long savePost(PostCreationDto dto) {
        Post post = new Post(
                accountService.getAccount(dto.getAuthorEmail()),
                dto.getTitle(),
                dto.getContent(),
                dto.getDay(),
                dto.getTime(),
                Arrays.stream(dto.getTags()).toList()
        );

        Post save = postRepository.save(post);
        return save.getId();
    }

    public List<PostBriefDto> getPostList() {
        List<Post> all = postRepository.findAll();
        List<PostBriefDto> ret = new ArrayList<>();
        for (Post p : all) ret.add(PostBriefDto.convertToDto(p));
        return ret;
    }

    public PostDto getPost(Long postId) {
        Optional<Post> byId = postRepository.findById(postId);
        if (byId.isEmpty()) throw new IllegalArgumentException("No post with postId(" + postId + ") found.");
        return PostDto.convertToDto(byId.get());
    }

    public void updatePost(Long postId, PostUpdateDto update) {
        Optional<Post> byId = postRepository.findById(postId);
        if (byId.isEmpty()) throw new IllegalArgumentException("No post with postId(" + postId + ") found.");
        Post post = byId.get();
        post.update(update);
        postRepository.save(post);
    }

    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }
}
