// TaskCard.tsx
import React, { useRef } from "react";
import { Task } from "../types/Task"; // Task 型をインポート
import Situation from "./Situation-modal";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const modalRef = useRef<HTMLDialogElement>(null); // モーダルの参照を管理

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <div
        className="card bg-base-100 max-width shadow-xl "
        onClick={openModal} // モーダルを開く処理
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{task.name}</h3>
          <p>{task.memo}</p>
          <p>{task.category}</p>
        </div>
      </div>
      <Situation modalRef={modalRef} /> {/* modalRef を渡す */}
    </>
  );
};

export default TaskCard;
