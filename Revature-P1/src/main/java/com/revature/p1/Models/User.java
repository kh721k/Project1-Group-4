package com.revature.p1.Models;

import jakarta.persistence.*;


import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uID")
    private Integer uID;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "bio")
    String bio;

    @Column(name = "username")
    String username;

    @Column(name = "password")
        String password;

    public Integer getuID() {
        return uID;
    }

    public void setuID(Integer uID) {
        this.uID = uID;
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
}
