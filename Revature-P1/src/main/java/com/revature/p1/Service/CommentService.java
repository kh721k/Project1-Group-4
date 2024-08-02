package com.revature.p1.Service;

import com.revature.p1.Models.Comment;
import com.revature.p1.Models.Post;
import com.revature.p1.Models.User;
import com.revature.p1.Repositories.CommentRepository;

import com.revature.p1.Repositories.PostRepository;
import com.revature.p1.Repositories.UserRepository;
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
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository, PostRepository postRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Comment createComment(Integer userId, Integer postId, Comment cmt) {
        User user = userRepository.findUserByUserId(userId);
        Post post = postRepository.findPostByPostId(postId);
        cmt.setPost(post);
        cmt.setAuthor(user);
        return commentRepository.save(cmt);
    }

    public void update(String content, Integer commentId) {
        commentRepository.update(content, commentId);
    }

    public Comment get(Integer commentId) {
        return commentRepository.get(commentId);
    }

    public void delete(Integer commentId) {
        commentRepository.delete(commentId);
    }
}
