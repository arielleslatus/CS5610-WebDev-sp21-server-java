package com.example.wbdvsp2101arielleslatusserverjava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "widgets")
public class Widget {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String type;
  private Integer widgetOrder;
  private String text;
  private String url;
  private Integer size;
  private Integer width,height;
  private String cssClass;
  private String style;
  private String value;
  private String topicId;
  private String name;
  private Boolean ordered;
  private String src;

  public Boolean getOrdered() {
    return ordered;
  }

  public void setOrdered(Boolean ordered) {
    this.ordered = ordered;
  }

  public String getSrc() {
    return src;
  }

  public void setSrc(String src) {
    this.src = src;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
//  public Widget(Long id, String topicId, String type, String text, Integer size) {
//    this.id = id;
//    this.topicId = topicId;
//    this.type = type;
//    this.text = text;
//    this.size = size;
//  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }
  public String getType() {
    return this.type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getWidgetOrder() {
    return this.widgetOrder;
  }

  public void setWidgetOrder(Integer widgetOrder) {
    this.widgetOrder = widgetOrder;
  }

  public String getText() {
    return this.text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getUrl() {
    return this.url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Integer getSize() {
    return this.size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public Integer getWidth() {
    return this.width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return this.height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getCssClass() {
    return this.cssClass;
  }

  public void setCssClass(String cssClass) {
    this.cssClass = cssClass;
  }

  public String getStyle() {
    return this.style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public String getValue() {
    return this.value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}

//Hibernate:
//
//        create table widget (
//        id bigint not null,
//        css_class varchar(255),
//        height integer,
//        size integer,
//        style varchar(255),
//        text varchar(255),
//        topic_id varchar(255),
//        type varchar(255),
//        url varchar(255),
//        value varchar(255),
//        widget_order integer,
//        width integer,
//        primary key (id)
//        ) engine=InnoDB


/*
Hibernate:

    create table widgets (
       id bigint not null auto_increment,
        css_class varchar(255),
        height integer,
        size integer,
        style varchar(255),
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        url varchar(255),
        value varchar(255),
        widget_order integer,
        width integer,
        primary key (id)
    ) engine=InnoDB
 */