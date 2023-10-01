import React, { useState } from "react";
import "./Header.css";
import logo from "./img/logoGreen.png";
import bookmarkIcon from "./img/bookmark.png";
import avatar from "./img/Avatar.png";
import notificationsActiveIcon from "./img/notifications_active.png";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../setup/stores";
import ButtonGradient from "../form/ButtonGradient";

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
  const pathname = window.location.pathname; //returns the current url minus the domain name
  const [userBoxShowing, setUserBoxShowing] = useState(false);
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

  const handleAvatarClick = () => {
    setUserBoxShowing(!userBoxShowing);
  };

  const handleUserMenuClicked = () => {
    navigate(`/${user?.roles[0]}`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleUserMissionsClicked = () => {
    navigate(`/${user?.roles[0]}/missions`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleInfoEdit = () => {
    navigate(`/${user?.roles[0]}/edit`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleLogout = async () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (err: any) {
      console.log(err.message);
    }
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
          <div className="header--user_part">
            <img src={notificationsActiveIcon} alt="" />
            <img src={bookmarkIcon} alt="" />
            <div className="header--avatar_line"></div>
            <div className="header--avatar_container">
              <img
                className="header--avatar"
                src={avatar}
                alt=""
                onClick={handleAvatarClick}
              />
              {userBoxShowing ? (
                <div className="header--avatar_userbox">
                  <div className="header--avatar_userbox_user">
                    <img
                      className="header--avatar_userbox_img"
                      src={avatar}
                      alt=""
                    />
                    <div className="header--avatar_userbox_name">
                      {user.name}
                    </div>
                  </div>
                  <div className="header--avatar_userbox_line"></div>

                  <div className="header--avatar_userbox_details">
                    <div
                      className="header--avatar_userbox_option header--avatar_userbox_missions"
                      onClick={handleUserMenuClicked}
                    >
                      Trang cá nhân
                    </div>
                    {user?.roles[0] === "0" ? (
                      <>
                        <div className="header--avatar_userbox_score">
                          <div className="header--avatar_userbox_score_label">
                            Điểm
                          </div>
                          <div className="header--avatar_userbox_score_value">
                            {user.score}
                          </div>
                        </div>
                        <div
                          className="header--avatar_userbox_option header--avatar_userbox_missions"
                          onClick={handleUserMissionsClicked}
                        >
                          Nhiệm vụ
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className="header--avatar_userbox_line"></div>
                  <div className="header--avatar_userbox_actions">
                    <div
                      className="header--avatar_userbox_option header--avatar_userbox_missions"
                      onClick={handleInfoEdit}
                    >
                      Cài đặt tài khoản
                    </div>
                    <div
                      className="header--avatar_userbox_option header--avatar_userbox_missions"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
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
