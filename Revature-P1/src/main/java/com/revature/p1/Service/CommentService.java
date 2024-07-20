package com.revature.p1.Service;

import com.revature.p1.Models.Comment;
import com.revature.p1.Repositories.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;

@Service
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
public class CommentService {
    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // TODO: Might be missing something, and/or totally wrong about these methods

    public void create(String content, Integer userId, Integer postId, Timestamp time) {
        commentRepository.create(content, userId, postId, time);
    }

    public void update(String content, Timestamp time, Integer commentId) {
        commentRepository.update(content, time, commentId);
    }

    public Comment get(Integer commentId) {
        return commentRepository.get(commentId);
    }

    public void delete(Integer commentId) {
        commentRepository.delete(commentId);
    }
}
