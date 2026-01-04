import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:8080/tasks");
  return res.json();
};

export const createTask = async (title: string): Promise<Task> => {
  const res = await fetch("http://localhost:8080/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });

  return res.json();
};

export const toggleTask = async (id: number, completed: boolean) => {
  await fetch(`http://localhost:8080/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
};
