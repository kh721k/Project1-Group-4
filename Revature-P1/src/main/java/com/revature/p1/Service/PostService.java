package com.revature.p1.Service;

import com.revature.p1.Exceptions.PostContentIsEmptyException;
import com.revature.p1.Exceptions.PostNotFoundException;
import com.revature.p1.Models.Post;
import com.revature.p1.Repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepo;

    public Post createPost(Post post) {
        if (post.getContent().isEmpty()) {
            System.out.println("There is no content.");
            throw new PostContentIsEmptyException("There is no content.");
        } else {
            return postRepo.save(post);
        }
    }

    public Post getPostByPostId(int postId){
        return postRepo.findByPostId(postId);
    }

    public List<Post> getPostsByUser(int userId){
        return postRepo.findByUserId(userId);
    }

    public void editPost(Post post){
        Post currPost = postRepo.findByPostId(post.getPostId());
        if(currPost == null){
            System.out.println("Post doesn't exist.");
            throw new PostNotFoundException("Post doesn't exist.");
        }
        else{
            currPost.setContent(post.getContent());
            postRepo.save(currPost);
        }
    }

    public void deletePost(int postId){
        Post currPost = postRepo.findByPostId(postId);
        if(currPost == null){
            System.out.println("Post doesn't exist.");
            throw new RuntimeException("Post doesn't exist.");
        }
        else{
            postRepo.deleteByPostId(postId);
        }
    }

}
