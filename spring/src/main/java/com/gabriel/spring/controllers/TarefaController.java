package com.gabriel.spring.controllers;


import com.gabriel.spring.models.Tarefa;
import com.gabriel.spring.models.repositories.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {
    @Autowired
    private TarefaRepository tarefaRepository;
    @GetMapping
    public List<Tarefa> list(){
        Iterable<Tarefa> it = tarefaRepository.findAll();
        List<Tarefa> lista = new ArrayList<Tarefa>();
        it.forEach(lista::add);

        return lista;
    }

}
