package com.revature.p1.Controllers;

import com.revature.p1.Models.*;
import com.revature.p1.Service.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RestController
public class LikeController {
// FollowController should be the same - maybe put in UserController
    @Autowired
    private LikeService likeService;

    @GetMapping("/posts/{post_id}/likes")
    public ResponseEntity<List<Like>> getLikesForPost(@PathVariable("post_id") Integer postId) {
        List<Like> likes = likeService.getLikesForPost(postId);
        return ResponseEntity.body(likes);
    }

    @PostMapping("/posts/{post_id}/newLike")
    public ResponseEntity<Like> createLike(@RequestParam Integer userId, @RequestParam Integer postId) {
        likeService.createLike(userId, postId);
        return ResponseEntity.status(200);
    }

    @DeleteMapping("/posts/{post_id}/deleteLike")
    public ResponseEntity<Like> deleteLike(@RequestParam Integer userId, @RequestParam Integer postId) {
        likeService.deleteLike(userId, postId);
        return ResponseEntity.status(200);

}