package com.infoway.service;
import com.infoway.entity.User;
import com.infoway.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ClientInfoStatus;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String saveUser(User user) {
        if(user != null) {
            userRepository.save(user);
        } else {
            throw new RuntimeException("given user is null");
        }
        return "signup success";
    }

    public List<User> getAllUser() {
        List<User> list = userRepository.findAll();
        if(list == null) {
            throw new RuntimeException("no user in database");
        }
        return list;
    }

    public User getUserById(Integer id) {
        User user = new User();
        if(id==null) {
            throw new RuntimeException("given id is not valid");
        } else {
            user = userRepository.getById(id);
        }
        if(user==null) {
            throw new RuntimeException("Given Id is not present");
        }
        return user;
    }
    public User getUserById(String gmail) {
        List<User> user;
        if(gmail==null) {
            throw new RuntimeException("given id is not valid");
        } else {
            user = userRepository.findByEmail(gmail);
        }
        if(user==null) {
            throw new RuntimeException("Given user is not present");
        }
        return user.get(0);
    }

    public User getUserByMailAndPassword(String email, String password) {
        List<User> user;
        if(email==null || password ==null) {
            throw new RuntimeException("given User details is not valid");
        } else {
            user = userRepository.findByEmailAndPassword(email,password);
        }
        if(user.isEmpty()) {
            throw new RuntimeException("Given User details is not present");
        }
        return user.get(0);
    }
}
