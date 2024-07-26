//package com.revature.p1.Service;
//
//import com.revature.p1.Models.*;
//import com.revature.p1.Repositories.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class FollowService {
//
//    @Autowired
//    private FollowRepository followRepo;
//    private UserRepository userRepo;
//
//    public void createFollow(Integer followerId, Integer followingId){
//        User follower = userRepo.findByUserId(followerId);
//        User following = userRepo.findByUserId(followingId);
//        Follow follow = new Follow();
//        follow.setFollower(follower);
//        follow.setFollowing(following);
//        followRepo.save(follow);
//    }
//
//    public void deleteFollow(Integer followerId, Integer followingId){
//        followRepo.deleteByFollowerIdAndFollowingId(followerId, followingId);
//    }
//
//    public List<Follow> getFollowers(Integer userId) {
//        return followRepo.findByFollowingId(userId);
//    }
//
//    public List<Follow> getFollowing(Integer userId) {
//        return followRepo.findByFollowerId(userId);
//    }
//
//}