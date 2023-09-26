package com.infoway.repository;

import com.infoway.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User , Integer> {
    public List<User> findByEmail(String email);

    public List<User> findByEmailAndPassword(String email, String password);
}
