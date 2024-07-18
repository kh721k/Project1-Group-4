package com.revature.p1.Service;


import com.revature.p1.Models.User;
import com.revature.p1.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository uRepo;

    //CRUD

    public User createUser(User u){
        return uRepo.save(u);
    }

    public User getUser(int userID) {
        return uRepo.getById(userID);
    }

    public User getUser(String username) {
        return uRepo.getByName(username);
    }
    public void deleteUser(User u) {
        uRepo.delete(u);
    }
}
