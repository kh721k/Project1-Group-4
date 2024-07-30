package com.revature.p1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.p1.Models.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html

    @Query(value = "INSERT INTO users (fname, lname, email, bio, username, pwd) VALUES (?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    User registration(User user);

    @Query(value = "SELECT * FROM users WHERE user_id = ?1", nativeQuery = true)
    User findUserByUserId(Integer userId);

    @Query(value = "SELECT * FROM users WHERE username = ?1", nativeQuery = true)
    User findUserByUsername(String username);

    @Modifying
    @Query(value = "UPDATE users SET fname = ?2 , lname = ?3 , email = ?4, bio = ?5 , username = ?6 , password = ?7 WHERE user_id = ?1", nativeQuery = true)
    void updateUser(Integer userId, String fname, String lname, String email, String bio, String username, String password);

    @Modifying
    @Query(value = "DELETE FROM users WHERE user_id = ?1", nativeQuery = true)
    void delUser(Integer userId);

    @Query(value = "SELECT * FROM users u JOIN follower_junction f ON u.user_id = f.follower_id WHERE f.following_id = ?1", nativeQuery = true)
    List<User> findFollowersByUserId(Integer userId);

}
