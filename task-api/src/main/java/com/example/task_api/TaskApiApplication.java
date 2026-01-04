package com.example.task_api;

import com.example.task_api.entity.Task;
import com.example.task_api.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TaskApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskApiApplication.class, args);
	}

	@Bean
	CommandLineRunner init(TaskRepository taskRepository) {
		return args -> {
			Task task = new Task();
			task.setTitle("最初のタスク");
			task.setCompleted(false);
			taskRepository.save(task);
		};
	}
}
