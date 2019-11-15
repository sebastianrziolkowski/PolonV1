package com.github.sziolkowski.polon.controller;


import com.github.sziolkowski.polon.model.User;
import com.github.sziolkowski.polon.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.security.Principal;
import java.util.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping("/user")
    public List<User> getAllUsers() {
        System.out.println("Get all Users...");

        List<User> users = new ArrayList<>();
        repository.findAll().forEach(users::add);
        System.out.println(users);
        return users;
    }

    @GetMapping(path = {"user/{id}"})
    public User get(@PathVariable("id") long id) {
        User user = repository.findById(id);
        if(user!=null) System.out.println("Searched user: " + user.toString());
        return user;
    }

    @PostMapping("/user")
    public User addUser(@Valid @RequestBody User user) {
        System.out.println("Add user...");
        return repository.save(user);
    }

    @DeleteMapping(path = {"user/{id}"})
    public void delete(@PathVariable("id") long id) {
        //  repository.deleteById(id);
        repository.delete(repository.findById(id));
    }

    public UserController() {
    }
}
