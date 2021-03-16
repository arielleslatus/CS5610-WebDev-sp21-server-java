package com.example.wbdvsp2101arielleslatusserverjava.services;

import com.example.wbdvsp2101arielleslatusserverjava.models.Widget;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();

    {
      Widget w1 = new Widget((long) 123, "HEADING", "Welcome to Widgets", 1);
      Widget w2 = new Widget((long) 234, "PARAGRAPH", "Welcome to Paragraphs", 1);
      Widget w3 = new Widget((long) 345, "HEADING", "Welcome to WebDev", 2);
      Widget w4 = new Widget((long) 123, "PARAGRAPH", "Welcome to Lorem Ipsum", 1);
      this.widgets.add(w1);
      this.widgets.add(w2);
      this.widgets.add(w3);
      this.widgets.add(w4);
    };

    public Widget createWidget(Widget widget) {
      Long id = (new Date()).getTime();
      widget.setId(id);
      widgets.add(widget);
      return widget;
    }

    public List<Widget> findAllWidgets() {
      return this.widgets;
    }

    public Widget findWidgetById(Long id) {
      for (Widget w: this.widgets) {
        if (w.getId().equals(id)) {
          return w;
        }
      }
      return null;
    }

    public Integer updateWidget(Long id) {
      return -1;
    }

    public Integer deleteWidget(Long id) {
      return -1;
    }
}
