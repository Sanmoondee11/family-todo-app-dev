// // Situation-modal.tsx
// import React from "react";
// import { Link } from "react-router-dom";

// interface SituationProps {
//   modalRef: React.RefObject<HTMLDialogElement | null>; // modalRef を受け取る
// }

// const Situation: React.FC<SituationProps> = ({ modalRef }) => {
//   return (
//     <dialog ref={modalRef} id="my_modal_2" className="modal">
//       <div className="modal-box">
//         <form method="dialog">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//             ✕
//           </button>
//         </form>
//         <h3 className="font-bold text-lg">タスクの進行状況</h3>
//         <p className="py-4 space-y-3 ">
//           <Link
//             to="/gacha"
//             className="btn btn-accent py-4 block w-full text-white "
//           >
//             おわった！
//           </Link>
//         </p>
//       </div>
//     </dialog>
//   );
// };

// export default Situation;

import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate をインポート

interface SituationProps {
  modalRef: React.RefObject<HTMLDialogElement | null>;
  onTaskComplete: () => void; // タスク完了時に実行される関数
}

const Situation: React.FC<SituationProps> = ({ modalRef, onTaskComplete }) => {
  const navigate = useNavigate(); // useNavigate を使ってページ遷移を管理

  const handleComplete = () => {
    onTaskComplete(); // タスク完了時にタスク削除
    modalRef.current?.close(); // モーダルを閉じる
    navigate("/gacha"); // gacha ページに遷移
  };

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
          <button
            onClick={handleComplete} // 完了時に遷移
            className="btn btn-accent py-4 block w-full text-white"
          >
            おわった！
          </button>
        </p>
      </div>
    </dialog>
  );
};

export default Situation;
