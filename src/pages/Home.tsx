import Header from "./Header";
import TaskCard from "./task_card";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="px-8">
        <TaskCard />
      </div>
    </>
  );
};

export default Home;
