package com.revature.p1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.p1.Models.*;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // https://docs.spring.io/spring-data/jpa/docs/1.6.0.RELEASE/reference/html/jpa.repositories.html
    User findByUsername(String username);

    //TODO :login
    //use repo.save
    @Query("INSERT INTO users (fname, lname, email, bio, username, pwd) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
    User registration(User user);

    @Query("SELECT * FROM users WHERE user_id = ?1")
    User findUserByUserId(Integer userId);


    @Query("SELECT * FROM users WHERE username = ?1")
    User findUserByUsername(String username);

    //use repo.save
    @Query("UPDATE users SET fname = ?1 , lname = ?2 , email = ?3, bio = ?4 , username = ?5 , password = ?6")

    User updateUser(Integer userId);

    @Query("DELETE FROM users WHERE user_id = ?1")
    void delUser(Integer userId);

    @Query("SELECT u FROM User u JOIN u.following f WHERE f.userId = ?1")
    List<User> findFollowersByUserId(Integer userId);

}
