// Situation-modal.tsx
import React from "react";
import { Link } from "react-router-dom";

interface SituationProps {
  modalRef: React.RefObject<HTMLDialogElement|null>; // modalRef を受け取る
}


const Situation: React.FC<SituationProps> = ({ modalRef }) => {
  return (
    <dialog ref={modalRef} id="my_modal_2" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">タスクの進行状況</h3>
        <p className="py-4 space-y-3 ">
          <Link
            to="/gacha"
            className="btn btn-accent py-4 block w-full text-white "
          >
            おわった！
          </Link>
        </p>
      </div>
    </dialog>
  );
};

export default Situation;
