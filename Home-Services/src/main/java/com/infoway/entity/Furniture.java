package com.infoway.entity;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Data
@NoArgsConstructor
@ToString
public class Furniture {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;


    @Column
    private Integer zipCode;

    @Column
    private Integer totalSmallFurnitures;

    @Column
    private Integer totalMediumFurnitures;

    @Column
    private Integer totalLargeFurnitures;

    @Column
    private String address;

    @Column
    private String mobile;

    private String status;




}
