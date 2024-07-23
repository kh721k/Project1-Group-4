package com.revature.p1.Exceptions;

public class PostNotFoundException extends RuntimeException{

    public PostNotFoundException(String message){
        super(message);
    }
}
