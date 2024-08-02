package com.revature.p1.Controllers;

import com.revature.p1.Models.Comment;
import com.revature.p1.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/comment/{user_id}/{post_id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment createComment(@PathVariable("user_id") Integer userId, @PathVariable("post_id") Integer postId, @RequestBody Comment cmt) {
        return commentService.createComment(userId, postId, cmt);
    }

    @GetMapping("/comment/{comment_id}")
    @ResponseStatus(HttpStatus.OK)
    public Comment view(@PathVariable("comment_id") Integer id) {
        return commentService.get(id);
    }

    @PutMapping("/comment/{comment_id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable("comment_id") Integer id, @RequestBody Comment cmt) {
        commentService.update(cmt.getContent(), id);
    }

    @DeleteMapping("/comment/{comment_id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("comment_id") Integer id) {
        commentService.delete(id);
    }
}
