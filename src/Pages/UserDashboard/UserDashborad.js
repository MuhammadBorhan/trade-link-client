import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import UserNavbar from "../../Components/UserNavbar";
import { BiSolidDashboard } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
import { TbBinaryTree2 } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const UserDashborad = () => {
  const [isAllBettingVisible, setIsAllBettingVisible] = useState(false);
  const [isAllInboxVisible, setIsAllInboxVisible] = useState(false);
  const [isMobileNumberHistoryVisible, setIsMobileNumberHistoryVisible] =
    useState(false);
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleAllBetting = () => {
    setIsAllBettingVisible(!isAllBettingVisible);
    setIsAllInboxVisible(false);
    setIsMobileNumberHistoryVisible(false);
    setIsUserInfoVisible(false);
  };

  const toggleAllInbox = () => {
    setIsAllInboxVisible(!isAllInboxVisible);
    setIsAllBettingVisible(false);
    setIsMobileNumberHistoryVisible(false);
    setIsUserInfoVisible(false);
  };
  const toggleMobileNumberHistory = () => {
    setIsMobileNumberHistoryVisible(!isMobileNumberHistoryVisible);
    setIsAllInboxVisible(false);
    setIsAllBettingVisible(false);
    setIsUserInfoVisible(false);
  };
  const toggleUserInfo = () => {
    setIsUserInfoVisible(!isUserInfoVisible);
    setIsMobileNumberHistoryVisible(false);
    setIsAllInboxVisible(false);
    setIsAllBettingVisible(false);
  };

  return (
    <div className="text-white">
      <UserNavbar toggleSidebar={toggleSidebar} />

      <div className="relative flex">
        <div className={` ${isSidebarVisible ? "lg:w-1/6 md:w-1/6" : ""}`}>
          <div
            className={`w-4/6 fixed bg-emerald-700 h-screen z-30  ${
              isSidebarVisible ? "w-[250px]" : "hidden"
            }`}
          >
            <div className="text-base font-semibold mx-3 mt-20 mb-5 ">
              <p>KP Shop LTD</p>
            </div>
            <div className="">
              <ul className="text-sm font-semibold">
                <Link to="/network">
                  <li className="flex items-center gap-x-1 p-3 border-l-4 border-blue-400 bg-gray-950 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <BiSolidDashboard />
                    Dashboard
                  </li>
                </Link>
                <Link to="/network">
                  <li className="flex items-center gap-x-1 p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <ImUserPlus />
                    Customer
                  </li>
                </Link>
                <Link to="/network">
                  <li className="flex items-center gap-x-1 p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <TbBinaryTree2 />
                    Tree View
                  </li>
                </Link>
                <Link to="/network">
                  <li className="flex items-center gap-x-1 p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <GiMoneyStack />
                    Transaction
                  </li>
                </Link>

                <div
                  className={`p-3 border-l-4 hover:border-blue-400  hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out flex justify-between ${
                    isAllInboxVisible
                      ? "border-blue-400 bg-gray-800"
                      : "border-emerald-700"
                  }`}
                  onClick={toggleAllInbox}
                >
                  <div>
                    <i className="fa-solid fa-envelopes-bulk mr-2" />
                    All Inbox
                  </div>
                  <div>
                    {isAllInboxVisible ? <BsChevronDown /> : <BsChevronRight />}
                  </div>
                </div>
                {isAllInboxVisible && (
                  <ul className="bg-gray-600 text-sm transition duration-300 ease-in-out">
                    <Link to="/network">
                      <li className="px-3 py-1 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                        <i className="fa-regular fa-circle mr-3" />
                        User Withdraw
                      </li>
                    </Link>
                    <Link to="/network">
                      <li className="px-3 py-1 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                        <i className="fa-regular fa-circle mr-3" />
                        User Deposit
                      </li>
                    </Link>
                    <Link to="/network">
                      <li className="px-3 py-1 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                        <i className="fa-regular fa-circle mr-3" />
                        Club Withdraw
                      </li>
                    </Link>
                  </ul>
                )}

                <Link to="/user/dashboard">
                  <li className="p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <i className="fa-solid fa-square-h mr-2" />
                    Founder Member
                  </li>
                </Link>
                <Link to="/network/third-admin-balance-transfer">
                  <li className="p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <i className="fa-brands fa-hire-a-helper mr-2" />
                    Executive Directior
                  </li>
                </Link>
                <Link to="/network/third-admin-balance-transfer">
                  <li className="p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <i className="fa-brands fa-hire-a-helper mr-2" />
                    Directior
                  </li>
                </Link>
                <Link to="/network/third-admin-balance-transfer">
                  <li className="p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <i className="fa-brands fa-hire-a-helper mr-2" />
                    District Directior
                  </li>
                </Link>
                <Link to="/network/third-admin-balance-transfer">
                  <li className="p-3 border-l-4 hover:border-blue-400 border-emerald-700 hover:bg-gray-950 cursor-pointer transition duration-75 ease-in-out">
                    <i className="fa-brands fa-hire-a-helper mr-2" />E Shop
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-screen bg-gray-300 ${
            isSidebarVisible ? "lg:w-5/6" : "w-full"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashborad;
