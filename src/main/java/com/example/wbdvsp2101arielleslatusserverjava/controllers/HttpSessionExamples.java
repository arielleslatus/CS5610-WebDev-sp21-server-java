package com.example.wbdvsp2101arielleslatusserverjava.controllers;

import com.example.wbdvsp2101arielleslatusserverjava.models.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "*")
public class HttpSessionExamples {
  List<User> users = new ArrayList<User>();

  @GetMapping("/api/register/{username}/{password}")
  public User register(
          @PathVariable("username") String username,
          @PathVariable("password") String password,
          HttpSession session) {
    User user = new User();
    user.setUsername(username);
    user.setPassword(password);
    session.setAttribute("currentUser", user);
    this.users.add(user);
    return user;
  }

  @GetMapping("/api/profile")
  public User profile(HttpSession session) {
    User currentUser = (User)
            session.getAttribute("currentUser");
    return currentUser;
  }

  @GetMapping("/api/login/{username}/{password}")
  public User login(
          @PathVariable("username") String username,
          @PathVariable("password") String password,
          HttpSession session) {
    for (User user : this.users) {
      if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
        session.setAttribute("currentUser", user);
        return user;
      }
    }
    return null;
  }


  @GetMapping("/api/logout")
  public void logout(HttpSession session) {
    session.invalidate();
  }

  @GetMapping("/api/session/set/{attr}/{value}")
  public String setSessionAttribute(
          @PathVariable("attr") String attr,
          @PathVariable("value") String value,
          HttpSession session) {
    session.setAttribute(attr, value);
    return attr + " = " + value;
  }

  @GetMapping("/api/session/get/{attr}")
  public String getSessionAttribute(
          @PathVariable("attr") String attr,
          HttpSession session) {
    return (String)session.getAttribute(attr);
  }


}
