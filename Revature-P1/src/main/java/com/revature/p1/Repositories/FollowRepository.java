package com.revature.p1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.p1.Models.*;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Integer> {
    List<Follow> findByFollowerId(Integer followerId);      // list of ppl the user is following, where the user is the "follower"
    List<Follow> findByFollowingId(Integer followingId);    // list of the user's followers, where the user is the "following"
    void deleteByFollowerIdAndFollowingId(Integer followerId, Integer followingId);
}
