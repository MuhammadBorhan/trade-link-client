import React from "react";
import { Link } from "react-router-dom";

const UserModal = ({ closePopUp, openPopUp }) => {
  const PopUpClose = (e) => {
    if (e.target.id === "PopUpBackground") closePopUp();
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setTimeout(() => {
      window.location.reload();
    }, 0.5);
  };

  const accessToken = localStorage.getItem("accessToken");

  if (!openPopUp) return null;
  return (
    <div
      id="PopUpBackground"
      onClick={PopUpClose}
      className="fixed inset-0 z-50  "
    >
      <div className=" relative">
        <div className="absolute top-11 right-0 mr-5 text-black bg-white drop-shadow-2xl">
          <div className="m-2">
            <ul className="text-sm ">
              <Link to="/user/profile">
                <li className="p-2 my-1 hover:bg-gray-200 cursor-pointer transition duration-75 ease-in-out rounded">
                  <i className="fa-solid fa-user-gear w-6" />
                  My Profile
                </li>
              </Link>
              <li
                onClick={logOut}
                className="p-2 my-1 hover:bg-gray-200 cursor-pointer transition duration-75 ease-in-out rounded"
              >
                <i className="fa-solid fa-right-from-bracket w-6" />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
