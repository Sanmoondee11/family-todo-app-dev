import React, { useState } from "react";


interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

interface Task {
  id: number;
  name: string;
  memo: string;
  category: string;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({  onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [memo, setMemo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      memo,
      category,
    };
    onAddTask(newTask);
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.close();
  };

  return (
    <div>
      <button
        className="btn mb-2"
        onClick={() => {
          const dialogElement = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement | null;
          dialogElement!.showModal();
        }}
        {...handleSubmit}
      >
        追加
      </button>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>{" "}
            <p className="py-4 space-y-3">
              <label className="input input-bordered flex items-center gap-2">
                タスク名
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  placeholder="宿題"
                  className="grow"
                />
              </label>{" "}
              <label className="input input-bordered flex items-center gap-2">
                メモ
                <input
                  type="text"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="こくごの宿題"
                  className="grow"
                />
              </label>
              <label  >
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select select-bordered w-full mt-4"
                >
                  <option value="">カテゴリーを選ぶ</option>
                  <option value="勉強">勉強</option>
                  <option value="お手伝い">お手伝い</option>
                  <option value="その他">その他</option>
                </select>
              </label>
              <button className="btn btn-accent w-full " onClick={handleSubmit}>
                タスクを追加
              </button>
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AddTaskModal;
