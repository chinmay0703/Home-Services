package com.infoway.service;

import com.infoway.entity.Cleaning;
import com.infoway.entity.Furniture;
import com.infoway.entity.User;
import com.infoway.repository.CleaningRepository;
import com.infoway.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CleaningService {

    @Autowired
    private CleaningRepository cleaningRepository;

    @Autowired
    private UserRepository userRepository;



    public String saveCleaning(Cleaning cleaning) {

        System.out.println(cleaning.getUser().getUserId());
        if (cleaning.getUser().getUserId() != null) {

            Integer id = cleaning.getUser().getUserId();
            User user1 = userRepository.getById(id);
            cleaning.setUser(user1);
            List<Cleaning> cleaningList = new ArrayList<>(user1.getCleaningList()); // Create a new list
            cleaningList.add(cleaning); // Add the new furniture
            user1.setCleaningList(cleaningList); // Set the updated list

            //userRepository.save(user1);
            cleaningRepository.save(cleaning);
            return "entry succesfully submitted";
        } else {
            return "entry is empty";
        }
    }
//    public List<Furniture> getFurnitureDetails() {
//        List<Furniture> list = furnitureRepository.findAll();
//        if(list == null) {
//            throw new RuntimeException("no data found");
//        }
//        return list;
//    }
//    public Furniture getById(Integer id) {
//        if(id==null) {
//            throw new RuntimeException("no id found");
//        }
//        Furniture furniture = furnitureRepository.getReferenceById(id);
//        return furniture;
//    }
}
