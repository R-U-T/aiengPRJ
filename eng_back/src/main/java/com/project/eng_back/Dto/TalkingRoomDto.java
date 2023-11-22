package com.project.eng_back.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TalkingRoomDto {

    @JsonProperty("crid")
    private String crid;
//    private String unum;
//    private LocalDateTime regdate;
//    private String subject;
//    private int lv;
//    private String time;
//    private int score;
    private String GPTRole;
    private String userRole;
    private String situation;
//    private String encodedCrid;

    public void setCrid(String crid) {
        this.crid = crid;
    }

//    public void setUnum(String unum) {
//        this.unum = unum;
//    }
//
//    public void setRegdate(LocalDateTime regdate) {
//        this.regdate = regdate;
//    }
//
//    public void setSubject(String subject) {
//        this.subject = subject;
//    }
//
//    public void setLv(int lv) {
//        this.lv = lv;
//    }
//
//    public void setTime(String time) {
//        this.time = time;
//    }
//
//    public void setScore(int score) {
//        this.score = score;
//    }

    public void setGPTRole(String GPTRole) {
        this.GPTRole = GPTRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

//    public void setEncodedCrid(String encodedCrid) {
//        this.encodedCrid = encodedCrid;
//    }
}