package com.revature.p1;

import com.revature.p1.Models.User;
import com.revature.p1.Service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Optional;

@SpringBootApplication
public class RevatureSocialNetworkingAppApplication {

	public static void main(String[] args) {
		ApplicationContext ac = SpringApplication.run(RevatureSocialNetworkingAppApplication.class, args);
		UserService us = ac.getBean(UserService.class);
		Optional<User> optionalUser = us.getUsers(1);
		if(optionalUser.isPresent()) {
			User user = optionalUser.get();
			System.out.println(user.getBio());
		}
	}
}
