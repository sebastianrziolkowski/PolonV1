package com.github.sziolkowski.polon.controller.authentication;


import com.github.sziolkowski.polon.enumData.role;
import com.github.sziolkowski.polon.model.User;
import com.github.sziolkowski.polon.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserLoginController {

    @Autowired
    UserRepository repository;

    @GetMapping("/auth/{userLogin}/{userPassword}")
    public User findUserByLoginAndPassword(@PathVariable("userLogin") String login, @PathVariable("userPassword") String password) {
        System.out.println("Find by login:" + login + " and " + password);
        User user = repository.findByUserLogin(login);
        if(user != null && user.getUserPassword().equals(password))
            return user;
        else return null;
    }

    @GetMapping("/roleAuth/{userLogin}")
    public role checkUserRoleByLogin(@PathVariable("userLogin") String login) {
        System.out.println("Find role by login:" + login);
        User user = repository.findByUserLogin(login);
        if(user != null)
            return user.getRole();
        else return role.NONE;
    }

}
