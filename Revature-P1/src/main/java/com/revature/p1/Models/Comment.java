package com.revature.p1.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cID")
    private Integer commentId;

    @Column(name = "description")
    private String description;

    @Column(name = "pID")
    private Integer pID;

    public Integer getCommentId() {
        return commentId;
    }

    public void setcID(Integer commentId) {
        this.commentId = commentId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getpID() {
        return pID;
    }

    public void setpID(Integer pID) {
        this.pID = pID;
    }
}
