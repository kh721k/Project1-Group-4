//package com.revature.p1.Models;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import jakarta.persistence.*;
//
//@Entity(name = "follows")
//public class Follow {
//
//    @ManyToOne
//    @JoinColumn(name = "follower_id")
//    private User follower;
//
//    @ManyToOne
//    @JoinColumn(name = "following_id")
//    private User following;
//
//    public Follow() {
//    }
//
//    public Follow(User follower, User following) {
//        this.follower = follower;
//        this.following = following;
//    }
//
//    public User getFollower() {
//        return follower;
//    }
//
//    public void setFollower(User follower) {
//        this.follower = follower;
//    }
//
//    public User getFollowing() {
//        return following;
//    }
//
//    public void setFollowing(User following) {
//        this.following = following;
//    }
//}
