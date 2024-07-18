package com.revature.p1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.p1.Models.*;

import java.util.HashMap;
import java.util.Map;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("INSERT INTO users (fname, lname, email, bio, username, pwd) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
    void registration(User user);

    @Query("SELECT * FROM users WHERE uID = ?1")
    User findUserByUserId(Integer uID);

    @Query("SELECT * FROM users WHERE username = ?1")
    User findUserByUsername(String username);

    @Query("UPDATE users SET fname = ?1 , lname = ?2 , email = ?3, bio = ?4 , username = ?5 , password = ?6")
    void updateUser(User user);

    @Query("DELETE FROM users WHERE userId = ?1")
    void delUser(Integer userId);

}
