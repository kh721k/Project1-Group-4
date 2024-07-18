package com.revature.p1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.p1.Models.*;

import java.util.HashMap;
import java.util.Map;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT * FROM users WHERE uID = ?1")
    User findUserByUserId(Integer uID);

    @Query("SELECT * FROM users WHERE username = ?1")
    User userByUsername(String username);

    @Query("")
}
