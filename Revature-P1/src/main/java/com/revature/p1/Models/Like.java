//package com.revature.p1.Models;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import jakarta.persistence.*;
//
//@Entity(name = "likes")
//public class Like {
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    @JsonBackReference
//    private User user;
//
//    @ManyToOne
//    @JoinColumn(name = "post_id")
//    @JsonBackReference
//    private Post post;
//
//    public Like() {
//    }
//
//    public Like(User user, Post post) {
//        this.user = user;
//        this.post = post;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Post getPost() {
//        return post;
//    }
//
//    public void setPost(Post post) {
//        this.post = post;
//    }
//}
