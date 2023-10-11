import React, { useState } from "react";
import UserModal from "./Modals/UserModal";
import { AiOutlineMenuFold } from 'react-icons/ai';

const UserNavbar = ({ toggleSidebar }) => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const handleUserModal = () => setOpenUserModal(true);
  const handleCloseUserModal = () => setOpenUserModal(false);

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="relative text-white">
      <header className="flex fixed w-full z-40">
        <div
          className="w-[311px] hidden lg:block "
          style={{
            background: "linear-gradient(0deg, #08545B, #37103a)",
            fontFamily: "Charm",
          }}
        >
          <h1 className="text-xl text-center py-2">Welcome to KP Shop</h1>
        </div>
        <div className="w-full bg-emerald-700 ">
          <div className="flex items-center justify-between text-xl">
            <AiOutlineMenuFold onClick={toggleSidebar} size={25} className="mt-2"/>
            <div className="flex gap-2 pr-5">
              <i className="fa-solid fa-envelope-open-text p-3 hover:bg-emerald-800"></i>
              <i className="fa-regular fa-envelope p-3 hover:bg-emerald-800"></i>
              <i className="fa-regular fa-bell p-3 hover:bg-emerald-800"></i>

              <div
                className={`hover:bg-emerald-800 ${
                  openUserModal ? "bg-emerald-800" : ""
                }`}
                onClick={handleUserModal}
              >
                <i className="fa-solid fa-user-shield p-3  "></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <UserModal openPopUp={openUserModal} closePopUp={handleCloseUserModal} />
    </div>
  );
};

export default UserNavbar;
