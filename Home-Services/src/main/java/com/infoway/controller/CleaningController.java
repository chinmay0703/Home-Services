package com.infoway.controller;

import com.infoway.entity.Approved;
import com.infoway.entity.Cleaning;

import com.infoway.entity.Furniture;
import com.infoway.repository.CleaningRepository;
import com.infoway.service.CleaningService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("user/cleaning")
public class CleaningController {

    @Autowired
    private CleaningService cleaningService;

    @Autowired
    private CleaningRepository cleaningRepository;
    @PostMapping(value="/bookfurniture",consumes = {"application/json"},produces = {"application/json"})
    public ResponseEntity<String> bookUserRequest(@RequestBody Cleaning cleaning) {
        System.out.println(cleaning);
        String msg = cleaningService.saveCleaning(cleaning);

        return  new ResponseEntity<>(msg , HttpStatus.CREATED);
    }
    @GetMapping(value = "/getbyidcleaning", produces = "application/json")
    public ResponseEntity<List<Cleaning>> getCleaning(@RequestParam("userId") Integer uid) {
        System.out.println("Request received for user ID: " + uid);
        List<Cleaning> list = cleaningRepository.findUnapprovedFurnitureByUserId(uid);
        if (list != null)
            return ResponseEntity.ok().body(list);
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
    @PostMapping(value="/approve",consumes = {"application/json"},produces = {"application/json"})
    public ResponseEntity<String> getApproved(@RequestBody Approved approved){
        Integer userId=approved.getUserId();
        Cleaning cleaning = cleaningRepository.getById(userId);
        if(cleaning!=null) {
            cleaning.setStatus(approved.getStatus());
            cleaningRepository.save(cleaning);
            return new ResponseEntity<>("success",HttpStatus.OK);
        }
        return new ResponseEntity<>("failed",HttpStatus.BAD_REQUEST);
    }
}
