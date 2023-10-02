import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/image/logoGreen.png";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../setup/stores";
import ButtonGradient from "../form/ButtonGradient";
import ProfileHeader from "../common/ProfileHeader";

interface IHeaderTab {
  title: string;
  name: string;
  path: string;
}

const headerTabList: IHeaderTab[] = [
  {
    title: "intro",
    name: "Giới thiệu",
    path: "/about",
  },
  {
    title: "mission",
    name: "Nhiệm vụ",
    path: "/mission",
  },
  {
    title: "activity",
    name: "Hành động",
    path: "/activity",
  },
  {
    title: "contact",
    name: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user.user); 
  const [headerPicked, setHeaderPicked] = useState<string>("");

  const navigate = useNavigate();

  const handleNavigate = (option: IHeaderTab) => {
    setHeaderPicked(option.title);
    navigate(option.path);
  };

  const handleLogoClick = () => {
    setHeaderPicked("/");
    navigate("/");
  };

  const handleSignInScreen = () => {
    navigate("/login");
  };

  return (
    <div className="header--container">
      <header className="header">
        <div className="header--nav_part">
          <div className="header--logo_container">
            <img
              className="header--logo"
              src={logo}
              alt="Green Env logo green color"
              onClick={handleLogoClick}
            />
          </div>
          <div className="header--nav_options">
            {headerTabList.map((option) => (
              <div
                className="header--option"
                onClick={() => handleNavigate(option)}
                key={option.title}
              >
                {option.title === headerPicked && (
                  <div className="header--option_chosen"></div>
                )}
                {option.name}
              </div>
            ))}
          </div>
        </div>
        {user ? (
            <ProfileHeader/>
        ) : (
          <div>
            <ButtonGradient
              btnText="Đăng nhập"
              onClick={handleSignInScreen}
              style={{ padding: "8px 16px" }}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
