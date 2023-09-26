package com.infoway.service;

import com.infoway.entity.Furniture;
import com.infoway.entity.User;
import com.infoway.repository.FurnitureRepository;
import com.infoway.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class FurnitureService {
    @Autowired
    private FurnitureRepository furnitureRepository;
    @Autowired
    private UserRepository userRepository;



    public String saveFurniture(Furniture furniture) {
        System.out.println(furniture.getUser().getUserId());
        if (furniture.getUser().getUserId() != null) {

            Integer id = furniture.getUser().getUserId();
            User user1 = userRepository.getById(id);
            furniture.setUser(user1);
            List<Furniture> furnitureList = new ArrayList<>(user1.getFurnitureList()); // Create a new list
            furnitureList.add(furniture); // Add the new furniture
            user1.setFurnitureList(furnitureList); // Set the updated list

            //userRepository.save(user1);
            furnitureRepository.save(furniture);
            return "entry succesfully submitted";
        } else {
            return "entry is empty";
        }
    }
    public List<Furniture> getFurnitureDetails() {
        List<Furniture> list = furnitureRepository.findAll();
        if(list == null) {
            throw new RuntimeException("no data found");
        }
        return list;
    }
    public Furniture getById(Integer id) {
        if(id==null) {
            throw new RuntimeException("no id found");
        }
        Furniture furniture = furnitureRepository.getReferenceById(id);
        return furniture;
    }
}
