import { Link } from "react-router-dom";
import AddTaskModal from "./add-task-modal";

const Header: React.FC = () => {
  return (
    <div className="  sm:text-4xl font-bold mb-6 drop-shadow-lg">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden  text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/home">ホーム</Link>
              </li>
              <li>
                <Link to="/pokedex">図鑑</Link>
              </li>
              <li>
                <Link to="/">ログイン画面main</Link>
              </li>
              <li>
                <Link to="/login">ログイン画面</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl  text-white">家族でタスク管理</a>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Header;
