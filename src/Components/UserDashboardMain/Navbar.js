import React from "react";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`bg-gray-200 p-4 ${isSidebarOpen ? 'w-4/5' : 'w-full'}`}>
      <button
        onClick={toggleSidebar}
        className=" text-gray-800"
        // className="block md:hidden text-gray-800"
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
      {/* Other navbar content */}
      {isSidebarOpen && (
        <button onClick={toggleSidebar} className="text-gray-800">
          Collapse Sidebar
        </button>
      )}
    </div>
  );
};

export default Navbar;
