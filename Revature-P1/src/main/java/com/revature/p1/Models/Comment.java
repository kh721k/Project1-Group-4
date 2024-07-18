package com.revature.p1.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cID")
    private Integer cID;

    @Column(name = "description")
    private String description;

    @Column(name = "pID")
    private Integer pID;

    public Integer getcID() {
        return cID;
    }

    public void setcID(Integer cID) {
        this.cID = cID;
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
