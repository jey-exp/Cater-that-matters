import React from "react";
import "./Navbar.css";
import { logo, profileimg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../../authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleprofileclick = () => {
    navigate("/profile");
  };
  return (
    <nav>
      <div className="w-full flex justify-between items-center drop-shadow-lg bg-white">
        <div className="ml-4">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </div>
        <div className="flex justify-evenly items-center p-3 gap-6 mr-2">
          <img
            src={profileimg}
            alt="profile"
            onClick={handleprofileclick}
            className="w-12 h-12 cursor-pointer"
          />
          <TbLogout2
            size={48}
            color="#1D3557"
            onClick={handleLogout}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
