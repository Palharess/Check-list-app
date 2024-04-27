package com.gabriel.spring.models.repositories;

import com.gabriel.spring.models.Tarefa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends CrudRepository<Tarefa, Integer>{

}
