package com.revature.p1.Controllers;

import com.revature.p1.Models.Comment;
import com.revature.p1.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/comments/ping")
    @ResponseStatus(HttpStatus.OK)
    public 

    @PostMapping("/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment create(@RequestBody) {
    }
}
