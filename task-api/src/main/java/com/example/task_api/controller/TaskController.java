package com.example.task_api.controller;

import com.example.task_api.entity.Task;
import com.example.task_api.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/tasks")
public class TaskController {

    private final TaskRepository repository;

    public TaskController(TaskRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Task> getTasks() {
        return repository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return repository.save(task);
    }

    @PatchMapping("/{id}")
    public Task updateTask(
            @PathVariable Long id,
            @RequestBody Task updated
    ) {
        Task task = repository.findById(id).orElseThrow();
        task.setCompleted(updated.isCompleted());
        return repository.save(task);
    }
}