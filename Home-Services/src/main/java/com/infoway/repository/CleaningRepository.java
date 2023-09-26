package com.infoway.repository;

import com.infoway.entity.Cleaning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CleaningRepository extends JpaRepository<Cleaning , Integer> {
    @Query("SELECT f FROM Cleaning f WHERE f.status IS NULL AND f.user.userId = :userId")
    List<Cleaning> findUnapprovedFurnitureByUserId(@Param("userId") Integer userId);

}
