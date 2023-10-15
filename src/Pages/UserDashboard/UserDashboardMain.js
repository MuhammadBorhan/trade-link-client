import React, { useState } from "react";
import Sidebar from "../../Components/UserDashboardMain/Sidebar";
import Navbar from "../../Components/UserDashboardMain/Navbar";

const UserDashboardMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      {/* <Sidebar isSidebarOpen={isSidebarOpen} /> */}
      {isSidebarOpen && (
       <Sidebar isSidebarOpen={isSidebarOpen} />
      )}
      <div
       className={`${
        isSidebarOpen ? 'w-4/5 ml-auto' : 'w-full' 
      } transition-all duration-300 ease-in-out`}
      >
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        {/* Main content here */}
        <h1>This is main content</h1>
      </div>
    </div>
  );
};

export default UserDashboardMain;
