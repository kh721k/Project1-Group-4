package com.revature.p1.Service;

import com.revature.p1.Models.*;
import com.revature.p1.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepo;

    public List<Follow> getFollowers(Integer userId) {
        return followRepository.findByFollowingId(userId);
    }

    public List<Follow> getFollowing(Integer userId) {
        return followRepository.findByFollowerId(userId);
    }

}