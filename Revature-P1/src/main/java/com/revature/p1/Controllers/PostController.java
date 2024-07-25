package com.revature.p1.Controllers;

import com.revature.p1.Models.Post;
import com.revature.p1.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PostController {

    @Autowired
    PostService postService;

    @CrossOrigin
    @PostMapping("/post")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Post createPost(@RequestBody Post post){
        return postService.createPost(post);
    }

    @GetMapping("/post/{postId}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Post getPostByPostId(@PathVariable Integer postId){
        return postService.getPostByPostId(postId);
    }

    @GetMapping("/post/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<Post> getUsersPosts(@PathVariable Integer userId){
        return postService.getPostsByUser(userId);
    }



}
