package com.revature.p1.Service;

import com.revature.p1.Models.Post;
import com.revature.p1.Repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepo;

    public Post createPost(Post post){
        if(post.getContent().isEmpty()){
            System.out.println("creat custom exception");
            throw new RuntimeException();
        }
        else{
            return postRepo.save(post);
        }
    }

    public Post getPostByPostId(int postId){
        return postRepo.findByPostId(postId);
    }



    public void editPost(Post post){
        Post currPost = postRepo.findByPostId(post.getPostId());
        if(currPost == null){
            System.out.println("post doesnt exist");
            throw new RuntimeException();
        }
        else{
            currPost.setContent(post.getContent());
            postRepo.save(currPost);
        }
    }

}
