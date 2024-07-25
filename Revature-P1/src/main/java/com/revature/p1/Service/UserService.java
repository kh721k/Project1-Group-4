package com.revature.p1.Service;


import com.revature.p1.Models.User;
import com.revature.p1.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import at.favre.lib.crypto.bcrypt.BCrypt;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
public class UserService {

    @Autowired
    private UserRepository uRepo;

    //CRUD
    //TODO : login
    public User createUser(User user){
        user.setPassword(BCrypt.withDefaults().hashToString(12, user.getPassword().toCharArray()));
        return uRepo.save(user);
    }

    public Optional<User> getUser(int userID) {

        return uRepo.findById(userID);
    }

    public User getUser(String username){
        return uRepo.findByUsername(username);
    }

    public User updateUser(Integer userId){
        return uRepo.updateUser(userId);
    }

    public void deleteUser(Integer userId){
        uRepo.delUser(userId);
    }

}
