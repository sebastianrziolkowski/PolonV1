package com.github.sziolkowski.polon.model.userService;

import javax.persistence.*;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "role_name", nullable = false, unique = true)
    private String name;

}
