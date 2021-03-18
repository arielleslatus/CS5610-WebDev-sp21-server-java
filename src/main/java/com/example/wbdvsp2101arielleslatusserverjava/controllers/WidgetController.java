package com.example.wbdvsp2101arielleslatusserverjava.controllers;
import com.example.wbdvsp2101arielleslatusserverjava.models.Widget;
import com.example.wbdvsp2101arielleslatusserverjava.services.WidgetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class WidgetController {
  @Autowired
  WidgetService service;// = new WidgetService();

  @GetMapping("/api/topics/{tid}/widgets")
  public List<Widget> findWidgetsForTopic(
          @PathVariable("tid") String topicId) {
    return service.findWidgetsForTopic(topicId);
  }

  @GetMapping("/api/widgets/{wid}")
  public Widget findWidgetById(
          @PathVariable("wid") Long id) {
    return service.findWidgetById(id);
  }
}
