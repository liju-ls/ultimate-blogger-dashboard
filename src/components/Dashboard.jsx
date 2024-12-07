import Header from "./Header";
import Sidebar from "./Sidebar";
import WorkingArea from "./WorkingArea";

function Dashboard() {
  return (
    <>
      <div className="h-full">
        <div className="h-10">
            <Header />
        </div>
        <div className="h-full flex">
          <div className="w-1/6 h-100">
            <Sidebar />
          </div>
          <div>
            <WorkingArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
