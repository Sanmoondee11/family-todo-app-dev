import { Link } from "react-router-dom";

const Situation: React.FC = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div
        onClick={() => document.getElementById("my_modal_2")!.showModal()}
      ></div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">タスクの進行状況</h3>
          <p className="py-4 space-y-3 ">
            <button className="btn btn-outline btn-accent block w-full">
              やっていない
            </button>
            <button className="btn btn-active btn-secondary block w-full">
              今やっている
            </button>
            <Link to="/gacha" className="btn btn-accent block w-full">おわった！</Link>

            {/* <button className="btn btn-accent block w-full">おわった！</button> */}
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Situation;
