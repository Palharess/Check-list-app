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


    //pega as tarefas do banco de dados para fazer o display no /tarefas


    @GetMapping
    public List<Tarefa> list() {
        Iterable<Tarefa> it = tarefaRepository.findAll();
        List<Tarefa> lista = new ArrayList<Tarefa>();
        it.forEach(lista::add);
        return lista;
    }


    //pega a atividade por id
    @GetMapping("{id}")
    public Tarefa pegaId(@PathVariable int id) {
        return tarefaRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tarefa não encontrada"));
    }


    //faz o post no banco de dados
    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        if (tarefa.getTitulo().isEmpty() || tarefa.getDescription().isEmpty() || tarefa.getData().isEmpty() || tarefa.getTempo().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fields cannot be empty");

        }
        return tarefaRepository.save(tarefa);
    }
}
