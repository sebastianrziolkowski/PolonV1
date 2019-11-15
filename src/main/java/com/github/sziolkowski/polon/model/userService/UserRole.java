package com.github.sziolkowski.polon.model.userService;

import com.github.sziolkowski.polon.model.User;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user_role")
public class UserRole {

    @Id
    @Column(name = "user_role_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

  //  @OneToMany(cascade = CascadeType.ALL, mappedBy = "User")
    @JoinColumn(name = "user_id", nullable = false)
    private long userId;
  //  private Set<User> user;

   // @OneToMany(cascade = CascadeType.ALL, mappedBy = "Role")
    @JoinColumn(name = "role_id", nullable = false)
    private long roleId;
  //  private Set<Role> role;


}
