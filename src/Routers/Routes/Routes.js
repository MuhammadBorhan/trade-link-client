import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import UserDashborad from "../../Pages/UserDashboard/UserDashborad";
import UserDashboardMain from "../../Pages/UserDashboard/UserDashboardMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/network",
    element: <UserDashborad />,
  },
  {
    path: "/user",
    element: <UserDashboardMain />,
  },

  {
    path: "*",
    element: (
      <div className="w-[100%] h-[100vh]">
        <img
          src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
          className="w-[100%] h-full"
        />
      </div>
    ),
  },
]);

export default router;
