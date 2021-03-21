package com.example.wbdvsp2101arielleslatusserverjava.services;
import com.example.wbdvsp2101arielleslatusserverjava.models.Widget;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();

    {

    };

    public Widget createWidgetForTopic(Widget widget) {
      Long id = (new Date()).getTime();
      widget.setId(id);
      widgets.add(widget);
      return widget;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
      List<Widget> toReturn = new ArrayList<Widget>();
      for (Widget w: this.widgets) {
        if (w.getTopicId().equals(topicId)) {
          toReturn.add(w);
        }
      }
      System.out.println(toReturn.toString());
      return toReturn;
    }

    public Widget findWidgetById(Long id) {
      for (Widget w: this.widgets) {
        if (w.getId().equals(id)) {
          return w;
        }
      }
      return null;
    }

    public Integer updateWidget(Long id, Widget newWidget) {
      for (int i = 0; i < widgets.size(); i++) {
        Widget w = widgets.get(i);
        if (w.getId().equals(id)) {
          widgets.set(i, newWidget);
          return 1;
        }
      }
      return -1;
    }

    public Integer deleteWidget(Long id) {
      int index = -1;
      for (int i = 0; i < widgets.size(); i++) {
        Widget w = widgets.get(i);
        if (w.getId().equals(id)) {
          index = i;
        }
      }
      if (index >= 0) {
        widgets.remove(index);
        return 1;
      }
      return -1;
    }
}
