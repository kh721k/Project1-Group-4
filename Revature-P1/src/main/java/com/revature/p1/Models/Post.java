package com.revature.p1.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer postId;


    private String content;


    private int like;


    private int shares;

//    @Column(name = "timestamp")
//    private Date timestamp;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "post")
    @JsonManagedReference
    List<Comment> comments;

    @OneToMany(mappedBy = "post")
    @JsonManagedReference
    List<Likes> likes;

    public Post(Integer postId, String content, int like, int shares, User user) {
        this.postId = postId;
        this.content = content;
        this.like = like;
        this.shares = shares;
        //this.timestamp = timestamp;
        this.user = user;
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLike() {
        return like;
    }

    public void setLike(int like) {
        this.like = like;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

//    public Date getTimestamp() {
//        return timestamp;
//    }

//    public void setTimestamp(Date timestamp) {
//        this.timestamp = timestamp;
//    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
