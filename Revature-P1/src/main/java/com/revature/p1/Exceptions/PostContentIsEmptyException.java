package com.revature.p1.Exceptions;

public class PostContentIsEmptyException extends RuntimeException{
    public PostContentIsEmptyException(String message){
        super(message);
    }
}
