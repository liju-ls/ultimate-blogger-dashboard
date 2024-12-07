import Header from "./Header";
import Sidebar from "./Sidebar";
import WorkingArea from "./WorkingArea";

function Dashboard() {
  return (
    <>
      <div>
        <Header />
        <div className="columns-2">
          <div className="w-2">
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
