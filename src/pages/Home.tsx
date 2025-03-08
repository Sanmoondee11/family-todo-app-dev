import React, { useState } from "react";
import AddTaskModal from "./add-task-modal";
import TaskCard from "./TaskCard";
import { Task } from "../types/Task";
import Header from "./Header";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen back bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden ">
      <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
        <div className="bg-transparent">
          <Header />
        </div>
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setIsAddTaskModalOpen(false)}
          onAddTask={addTask}
        />
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
