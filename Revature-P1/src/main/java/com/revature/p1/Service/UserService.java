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
    //TODO : login
    public User createUser(User user){
        return uRepo.save(user);
    }

    public User getUser(int userID) {
        return uRepo.findUserByUserId(userID);
    }

    public User getUser(String username){
        return uRepo.findUserByUsername(username);
    }

    public User updateUser(User user){
        return uRepo.save(user);
    }

    public void deleteUser(Integer userId){
        uRepo.delUser(userId);
    }

}
