package com.revature.p1.Service;

import com.revature.p1.Models.*;
import com.revature.p1.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepo;
    private UserRepository userRepo;
    private PostRepository postRepo;

    public void createLike(Integer userId, Integer postId){
        // fix based on methods in repos
        User user = userRepo.findByUserId(userId);
        Post post = postRepo.findByPostId(postId);
        Like like = new Like();
        like.setUser(user);
        like.setPost(post);
        likeRepo.save(like);
    }

    public void deleteLike(Integer userId, Integer postId){
        likeRepo.deleteByUserIdAndPostId(userId, postId);
    }

    public List<Likes> getLikesForPost(Integer postId) {
        return likeRepo.findByPostId(postId);
    }
}
