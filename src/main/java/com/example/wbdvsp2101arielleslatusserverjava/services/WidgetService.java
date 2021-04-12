package com.example.wbdvsp2101arielleslatusserverjava.services;
import com.example.wbdvsp2101arielleslatusserverjava.models.Widget;
import com.example.wbdvsp2101arielleslatusserverjava.repositories.WidgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    public Widget createWidgetForTopic(Widget widget) {
      widget.setHeight(100);
      widget.setWidth(100);
      return this.repository.save(widget);
    }

    public List<Widget> findAllWidgets() {
      return (List<Widget>) this.repository.findAllWidgets();
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
      return this.repository.findWidgetsForTopic(topicId);
    }

    public Widget findWidgetById(Long id) {
      return this.repository.findWidgetById(id);
    }

    public Integer updateWidget(Long id, Widget newWidget) {
      Widget originalWidget = findWidgetById(id);
      originalWidget.setText(newWidget.getText());
      originalWidget.setType(newWidget.getType());
      originalWidget.setSize(newWidget.getSize());
      originalWidget.setOrdered(newWidget.getOrdered());
      originalWidget.setWidth(newWidget.getWidth());
      originalWidget.setHeight(newWidget.getHeight());
      if (newWidget.getSrc() != null) {
        originalWidget.setSrc(newWidget.getSrc());
      }
      this.repository.save(originalWidget);
      return 1;
    }

    public Integer deleteWidget(Long id) {
      this.repository.deleteById(id);
      return 1;
    }
}
