package com.gabriel.spring;

import com.gabriel.spring.models.Tarefa;
import com.gabriel.spring.models.repositories.TarefaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner init(TarefaRepository tarefaRepository) {
		return args -> {
			tarefaRepository.deleteAll();
			Tarefa tarefa1 = new Tarefa();
			tarefa1.setTitulo("Estudar");
			tarefa1.setDescription("Estudar Spring Boot");
			tarefa1.setData("10/10/2021");
			tarefa1.setTempo("10:00");
			tarefaRepository.save(tarefa1);
		};
	}

}
