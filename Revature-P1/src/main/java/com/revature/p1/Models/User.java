package com.revature.p1.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;


import java.util.List;
import java.util.ArrayList;

@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String fname;

    private String lname;

    private String email;

    private String bio;

    private String username;

    private String password;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    List<Post> posts;

    public User() {
    }

    public User(Integer userId, String fname, String lname, String email, String bio, String username, String password) {
        this.userId = userId;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.bio = bio;
        this.username = username;
        this.password = password;
    }

    public User(String fname, String lname, String email, String bio, String username, String password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.bio = bio;
        this.username = username;
        this.password = password;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
}
