import React, { useState } from "react";
import "./Header.css";
import logo from "./img/logoGreen.png";
import bookmarkIcon from "./img/bookmark.png";
import avatar from "./img/Avatar.png";
import notificationsActiveIcon from "./img/notifications_active.png";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../setup/stores";
import ButtonGradient from "../form/ButtonGradient";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  console.log("🚀 ~ file: Header.tsx:12 ~ Header ~ user:", user);
  const pathname = window.location.pathname; //returns the current url minus the domain name
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [userBoxShowing, setUserBoxShowing] = useState(false);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleMissionsClick = () => {
    navigate("/missions");
  };

  const handleActivityClick = () => {
    navigate("/activity");
  };

  const handleExchangeClick = () => {
    navigate("/exchange");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleMainSigninText = () => {
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

  const handleLogoutClicked = () => {
    setConfirmLogout(true);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleNotLogout = () => {
    setConfirmLogout(false);
  };

  const handleLogout = async (choice: number) => {
    try {
      localStorage.clear();
      navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
    setConfirmLogout(false);
  };

  return (
    <div className="header--container">
      {/* {confirmLogout ? (
        <ConfirmLogout
          handleLogout={handleLogout}
          handleNotLogout={handleNotLogout}
        />
      ) : null} */}
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
            <div className="header--option" onClick={handleAboutClick}>
              {pathname === "/about" ? (
                <div className="header--option_chosen"></div>
              ) : null}
              Giới thiệu
            </div>
            <div className="header--option" onClick={handleMissionsClick}>
              {pathname === "/missions" ? (
                <div className="header--option_chosen"></div>
              ) : null}
              Nhiệm vụ
            </div>
            <div className="header--option" onClick={handleActivityClick}>
              {pathname === "/activity" ? (
                <div className="header--option_chosen"></div>
              ) : null}
              Hành động
            </div>
            <div className="header--option" onClick={handleExchangeClick}>
              {pathname === "/exchange" ? (
                <div className="header--option_chosen"></div>
              ) : null}
              Đổi quà
            </div>
            <div className="header--option" onClick={handleContactClick}>
              {pathname === "/contact" ? (
                <div className="header--option_chosen"></div>
              ) : null}
              Liên hệ
            </div>
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
                      onClick={handleLogoutClicked}
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
              onClick={handleMainSigninText}
              style={{ padding: "8px 16px" }}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
