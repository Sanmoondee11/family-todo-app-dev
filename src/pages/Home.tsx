import React, { useState } from "react";
import AddTaskModal from "./add-task-modal";
import TaskCard from "./TaskCard";
import { Task } from "../types/Task";


const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
    <AddTaskModal
      isOpen={isAddTaskModalOpen}
      onClose={() => setIsAddTaskModalOpen(false)}
      onAddTask={addTask}
    />
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </div>
    // <>
    //   <div>
    //     <Header />
    //   </div>
    //   <div className="px-8">
    //     <TaskCard />
    //   </div>
    // </>
  );
};

export default Home;

