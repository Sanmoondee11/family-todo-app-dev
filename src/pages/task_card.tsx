import Situation from "./Situation-modal";
import
const TaskCard: React.FC = () => {
  return (
    <>
      <div className="card bg-base-100 max-width shadow-xl " 
      onClick={()=>document.getElementById('my_modal_2')!.showModal()}
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            タスク名
            {/* <div className="badge badge-secondary">進行状況のバッチ</div> */}
          </h2>
          <p>タスクの説明</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
      <Situation/>
    </>
  );
};

export default TaskCard;
