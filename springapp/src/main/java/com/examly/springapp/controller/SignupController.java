package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class SignupController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/saveUser"})
    @CrossOrigin(origins = "http://localhost:4200/")
    public User saveUser(@RequestBody User user)throws Exception {
        String tempUsername=user.getUsername();
        if(tempUsername !=null && !" ".equals(tempUsername)){
            User userobj=userService.fetchUserByUsername(tempUsername);
            if(userobj !=null) {
                throw new Exception("User with this "+tempUsername+" is Already Exist");
            }
        }
        User userObj=null;
        userObj=userService.saveUser(user);
        return userObj;
    }

    @GetMapping({"/forAdmin"})
    @CrossOrigin(origins = "http://localhost:4200/")
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @CrossOrigin(origins = "http://localhost:4200/")
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }


    @GetMapping("/user/{id}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public User fetchById(@PathVariable("id") String username) {
        return userService.fetchUserByUsername(username);
    }

}

