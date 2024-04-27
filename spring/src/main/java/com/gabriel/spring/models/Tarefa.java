package com.gabriel.spring.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Data
@Entity
public class Tarefa {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @JsonProperty("_id")
    private int id;
    @Column(nullable = false, length = 30)
    private String titulo;
    @Column(nullable = false, length = 200)
    private String description;
    @Column(nullable = false)
    private String data;
    @Column(nullable = false)
    private String tempo;

}
