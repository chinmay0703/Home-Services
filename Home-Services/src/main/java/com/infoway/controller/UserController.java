package com.infoway.controller;

import com.infoway.entity.Furniture;
import com.infoway.entity.User;
import com.infoway.mailsender.JavaMailSenderAPI;
import com.infoway.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JavaMailSenderAPI javaMailSenderAPI;
    @PostMapping(value="/signup", consumes={"application/json"})
    public ResponseEntity<String> signup(@RequestBody User user) {
        String msg = userService.saveUser(user);
        String mail = user.getEmail();
        javaMailSenderAPI.sendMail(mail,
                "sign up successfull to home services",
                "your sign up success full to our application" +
                        "to get services login to our official web site and get bookings for services");
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @GetMapping(value="/signin", produces = {"application/json"})
    public ResponseEntity<User> signin(@RequestParam("email") String email, @RequestParam("password") String password) {
        User user = userService.getUserByMailAndPassword(email, password);
        return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
    }

    @GetMapping(value="/getall", produces = {"application/json"})
    public ResponseEntity<List<User>> getAll(){
        List<User> list=userService.getAllUser();
      //  System.out.println(list);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }



}
