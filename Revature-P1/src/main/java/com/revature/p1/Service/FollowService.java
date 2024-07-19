package com.revature.p1.Service;

import com.revature.p1.Models.*;
import com.revature.p1.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepo;

    public void createFollow(Follow follow){
        followRepo.save(follow);
    }

    public List<Follow> getFollowers(Integer userId) {
        return followRepo.findByFollowingId(userId);
    }

    public List<Follow> getFollowing(Integer userId) {
        return followRepo.findByFollowerId(userId);
    }

}