package com.github.sziolkowski.polon.model;

import com.github.sziolkowski.polon.enumData.role;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "userLogin", unique = true, nullable = false)
    private String userLogin;

    @Column(name = "userName")
    private String userName;

    @Column(name = "userSurname")
    private String userSurname;

    @Column(name = "userPassword", nullable = false)
    private String userPassword;

    @Column(name = "email")
    private String email;

    @Column(name = "age")
    private Integer age;

    @Column(name = "role")
    private role role;

    @Column(name = "active")
    private boolean active;


    public User(){}

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUserName(String nameName) {
        this.userName = nameName;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public com.github.sziolkowski.polon.enumData.role getRole() {
        return role;
    }

    public void setRole(com.github.sziolkowski.polon.enumData.role role) {
        this.role = role;
    }

    public User(String userLogin, String userName, String userSurname, String userPassword, String email, Integer age, com.github.sziolkowski.polon.enumData.role role, boolean active) {
        this.userLogin = userLogin;
        this.userName = userName;
        this.userSurname = userSurname;
        this.userPassword = userPassword;
        this.email = email;
        this.age = age;
        this.role = role;
        this.active = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;

        User user = (User) o;

        if (getId() != user.getId()) return false;
        if (isActive() != user.isActive()) return false;
        if (!getUserLogin().equals(user.getUserLogin())) return false;
        if (getUserName() != null ? !getUserName().equals(user.getUserName()) : user.getUserName() != null)
            return false;
        if (getUserSurname() != null ? !getUserSurname().equals(user.getUserSurname()) : user.getUserSurname() != null)
            return false;
        if (!getUserPassword().equals(user.getUserPassword())) return false;
        if (getEmail() != null ? !getEmail().equals(user.getEmail()) : user.getEmail() != null) return false;
        if (getAge() != null ? !getAge().equals(user.getAge()) : user.getAge() != null) return false;
        return getRole() == user.getRole();
    }

    @Override
    public int hashCode() {
        int result = (int) (getId() ^ (getId() >>> 32));
        result = 31 * result + getUserLogin().hashCode();
        result = 31 * result + (getUserName() != null ? getUserName().hashCode() : 0);
        result = 31 * result + (getUserSurname() != null ? getUserSurname().hashCode() : 0);
        result = 31 * result + getUserPassword().hashCode();
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getAge() != null ? getAge().hashCode() : 0);
        result = 31 * result + getRole().hashCode();
        result = 31 * result + (isActive() ? 1 : 0);
        return result;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userLogin='" + userLogin + '\'' +
                ", userName='" + userName + '\'' +
                ", userSurname='" + userSurname + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", role=" + role +
                ", active=" + active +
                '}';
    }
}
