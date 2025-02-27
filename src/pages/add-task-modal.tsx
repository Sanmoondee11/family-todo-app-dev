const AddTaskModal: React.FC = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3")!.showModal()}
      >
        追加
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">新しいタスク</h3>
          <div className="py-4 space-y-3">
            <p className="py-4 space-y-3">
              <label className="input input-bordered flex items-center gap-2">
                タスク名
                <input type="text" className="grow" placeholder="宿題" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                メモ
                <input
                  type="text"
                  className="grow"
                  placeholder="さんすうの宿題"
                />
              </label>
            </p>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
               カテゴリーを選ぶ
              </option>
              <option>勉強</option>
              <option>お手伝い</option>
              <option>その他</option>
            </select>
          </div>
          <button className="btn btn-accent w-full">タスクを追加</button>
        </div>
      </dialog>
    </>
  );
};

export default AddTaskModal;
