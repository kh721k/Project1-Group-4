package com.revature.p1.Controllers;

import com.revature.p1.Models.*;
import com.revature.p1.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class LikeController {

    @Autowired
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping("/users/{userId}/likedPosts")
    public List<Post> getUsersLikedPosts(@PathVariable("userId") Integer userId) {
        return likeService.getPostsLikedByUser(userId);
    }

    @GetMapping("/posts/{postId}/likes")
    public List<User> getUserLikesForPost(@PathVariable("postId") Integer postId) {
        return likeService.getPostLikes(postId);
    }

    @PostMapping("/posts/{postId}/{userId}")
    public void likePost(@PathVariable("postId") Integer postId, @PathVariable("userId") Integer userId){
        likeService.likePost(userId, postId);
    }

    @DeleteMapping("/posts/{postId}/{userId}")
    public void unlikePost(@PathVariable("postId") Integer postId, @PathVariable("userId") Integer userId){
        likeService.unlikePost(userId, postId);
    }

}