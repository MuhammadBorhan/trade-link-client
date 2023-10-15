import React from 'react';

function Sidebar({ isSidebarOpen }) {
  return (
    <nav
      className={`bg-gray-800 w-64 min-h-screen p-4 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out fixed top-0 left-0`}
    >
      <div className="text-white">
        {/* Sidebar content, including menu and sub-menu */}
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
