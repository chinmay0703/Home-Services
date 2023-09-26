package com.infoway.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@ToString
@Entity
@Table(name = "USER")

public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer userId;
    private String firstName;
    private String lastName;
    @Email
    @NotBlank
    private String email;
    private String phoneNo;
    @NotBlank
    private String password;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Furniture> furnitureList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Cleaning> cleaningList;


}
