import React, { useState, useEffect } from "react";
import AddTaskModal from "./add-task-modal";
import TaskCard from "./TaskCard";
import { Task } from "../types/Task";
import Header from "./Header";

const LOCAL_STORAGE_KEY = "tasks";

const Home: React.FC = () => {
  // ローカルストレージから取得したタスクを初期値として設定
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  // タスクが変更されるたびに localStorage に保存
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== Number(taskId));
    setTasks(updatedTasks); // 削除されたタスクを新しい配列に設定
  };

  return (
    <div className="min-h-screen back bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden">
      <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
        <div className="bg-transparent">
          <Header />
        </div>
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setIsAddTaskModalOpen(false)}
          onAddTask={addTask}
        />
        <div className="space-y-3 md:grid md:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onTaskComplete={removeTask} // removeTask を渡す
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
