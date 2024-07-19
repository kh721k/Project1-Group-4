package com.revature.p1.Controllers;

import com.revature.p1.Service.AuthDto;
import com.revature.p1.Service.JwtTokenService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.core.env.PropertyResolver;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {
    private final Environment environment;
    private final JwtTokenService jwtTokenService;

    @Autowired
    public AuthController(Environment environment, JwtTokenService jwtTokenService){
        this.environment = environment;
        this.jwtTokenService = jwtTokenService;
    }

    @PostMapping("/authenticate")
    @ResponseStatus(HttpStatus.OK)
    public String login(@RequestBody AuthDto authDto, HttpServletResponse response){
        String username = environment.getProperty("AUTH_USERNAME");
        String password = environment.getProperty("AUTH_PASSWORD");

        if(authDto.getUsername().equals(username)
                && authDto.getPassword().equals(password)) {
            Map<String, String> claimsMap = new HashMap<>();
            claimsMap.put("username", username);
            claimsMap.put("role", "admin");
            Cookie cookie = new Cookie("Authentication", this.tokenService.generateToken(claimsMap));
            response.addCookie(cookie);
        } else {
            //throw new AuthException("Bad username or password.");
            continue;
        }
        return "Authenticated.";
    }
}
