package com.revature.p1.Exceptions;

public class InvalidLogin extends RuntimeException{
    public InvalidLogin(String msg){
        super(msg);
    }
}
