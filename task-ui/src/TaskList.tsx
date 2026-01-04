import { useEffect, useState } from "react";
import { fetchTasks, createTask } from "./api/taskApi";
import type { Task } from "./api/taskApi";
import { toggleTask } from "./api/taskApi";

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState("");

    const reloadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    useEffect(() => {
        reloadTasks();
    }, []);

    const handleAdd = async () => {
        if (!title.trim()) return;

        await createTask(title);
        setTitle("");
        reloadTasks();
    };

    const handleToggle = async (task: Task) => {
        await toggleTask(task.id, !task.completed);
        reloadTasks();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="新しいタスクを入力"
                        className="flex-1 border rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 text-white px-4 rounded-md
                       font-semibold hover:bg-blue-700 transition"
                    >
                        追加
                    </button>
                </div>

                <ul className="space-y-2">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between
                         border rounded-md px-4 py-2 bg-gray-50"
                        >
                            <span
                                className={
                                  task.completed
                                  ? "text-gray-400 line-through"
                                  : "text-gray-800"
                                }
                            >
                            {task.title}
                            </span>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => {
                                    console.log("clicked", task.id, task.completed);
                                    handleToggle(task);
                                }}
                                className="w-4 h-4 cursor-pointer"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
