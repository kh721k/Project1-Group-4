package com.revature.p1.Controllers;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.revature.p1.Exceptions.InvalidLogin;
import com.revature.p1.Models.User;
import com.revature.p1.Service.JwtTokenService;
import com.revature.p1.Service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private final UserService userService;
    private final JwtTokenService tokenService;
//    private final AuthDto authDto;

    @Autowired
    public UserController(UserService userService, JwtTokenService tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
//        this.authDto = authDto;
    }

    @GetMapping("/user")
    public User userByUsername(@RequestParam(value = "username") String username) {
        return userService.getUser(username);
    }

    @GetMapping("/user/{userId}")
    public User userById(@PathVariable("userId") Integer uid) {
        return userService.getUser(uid);
    }

    @PutMapping("/user")
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/user/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public void delUser(@PathVariable("userId") Integer uid) {
        userService.deleteUser(uid);
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerNewUser(@RequestBody User user, HttpServletResponse httpServletResponse) {
        if (userService.getUser(user.getUsername()) != null) {
            return ResponseEntity.status(409).body("Username Taken");
        }

        User temp = userService.createUser(user);
        Map<String, String> claimsMap = new HashMap<>();
        claimsMap.put("username", temp.getUsername());
        claimsMap.put("userID", String.valueOf(temp.getUserId()));
        Cookie cookie = new Cookie("Authentication", this.tokenService.generateToken(claimsMap));
        httpServletResponse.addCookie(cookie);
        return ResponseEntity.status(200).body("Successful Registration!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user, HttpServletResponse httpServletResponse) {
        if (userService.getUser(user.getUsername()) == null) {
            return ResponseEntity.status(401).body("Invalid username");
        }

        User temp = userService.getUser(user.getUsername());
        String hashedPassword = this.userService.getUser(user.getUsername()).getPassword();
        BCrypt.Result result = BCrypt.verifyer().verify(user.getPassword().toCharArray(), hashedPassword);
        if (!result.verified) {
            return ResponseEntity.status(401).body("Invalid password");
        }

        Map<String, String> claimsMap = new HashMap<>();
        claimsMap.put("username", temp.getUsername());
        claimsMap.put("userID", String.valueOf(temp.getUserId()));
        Cookie cookie = new Cookie("Authentication", this.tokenService.generateToken(claimsMap));
        httpServletResponse.addCookie(cookie);
        return ResponseEntity.status(200).body("Successful Login!");
    }

    // TODO: TEST
    // follower handlers
    @GetMapping("/user/{userId}/followers")
    public List<User> getUserFollowers(@PathVariable Integer uid) {
        return userService.getFollowers(uid);
    }

    // TODO: TEST
    @GetMapping("/user/{userId}/following")
    public List<User> getUserFollowing(@PathVariable Integer uid) {
        return userService.getFollowing(uid);
    }

    // TODO: TEST
    @PostMapping("/user/{userId}/following/{followingId}")
    public void followUser(@PathVariable Integer userId, @PathVariable Integer followingId) {
        userService.followUser(userId, followingId);
    }

    // TODO: TEST
    @DeleteMapping("/user/{userId}/following/{followingId}")
    public void unfollowUser(@PathVariable Integer userId, @PathVariable Integer followingId) {
        userService.unfollowUser(userId, followingId);
    }


}
