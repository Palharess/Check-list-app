package com.gabriel.spring.controllers;


import com.gabriel.spring.models.Tarefa;
import com.gabriel.spring.models.repositories.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/tarefas")
public class TarefaController {
    @Autowired
    private TarefaRepository tarefaRepository;

    @GetMapping
    public List<Tarefa> list() {
        Iterable<Tarefa> it = tarefaRepository.findAll();
        List<Tarefa> lista = new ArrayList<Tarefa>();
        it.forEach(lista::add);
        return lista;
    }

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        if (tarefa.getTitulo().isEmpty() || tarefa.getDescription().isEmpty() || tarefa.getData().isEmpty() || tarefa.getTempo().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fields cannot be empty");
        }
        return tarefaRepository.save(tarefa);
    }
}
