package com.github.sziolkowski.polon.repo;

import com.github.sziolkowski.polon.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findById(long id);
    User findByUserLogin(String userLogin);
}