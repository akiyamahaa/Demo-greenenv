import React from "react";
import "./MissionDetails.css";
import map from "./components/img/map.png";
import callIcon from "./components/img/ic_call.png";
import locationIcon from "./components/img/ic_location_on.png";
import missionImg from "./components/img/Rectangle 6.png";
import dot1 from "./components/img/Ellipse 3.svg";
import dot2 from "./components/img/Ellipse 4.svg";
import dot3 from "./components/img/Ellipse 5.svg";
import userIcon from "./components/img/user-solid.svg";
import { useParams } from "react-router-dom";

type Props = {
  // id: string
};

// TODO: Build UI for Mission Detail
const MissionDetails = (props: Props) => {

  const param = useParams()
  console.log(param);
  

  return (
    <main className="mission-details--mission-details">
      <div className="mission-details--mission-header">
        <div className="mission-details--general-info">
          <div className="mission-details--header--first_line">
            <div className="mission-details--first_line_details">
              <div className="mission-details--mission-title">Nhiệm vụ</div>
              <div className="mission-details--mission-rewards">+50</div>
            </div>
            <div className="mission-details--volunteers_required">
              <img src={userIcon} alt="" /> 2 / 3
            </div>
          </div>
          <div className="mission-details--header--second_line">
            <div className="mission-details--contact">
              <img
                src={locationIcon}
                alt=""
                className="mission-details--icon"
              />
              <div className="mission-details--mission-location">
                Số 11, Vũ Phạm Hàm, Yên Hòa, Cầu Giấy, HN
              </div>
            </div>

            <div className="mission-details--contact">
              <img src={callIcon} alt="" className="mission-details--icon" />
              <div className="mission-details--mission-call">
                (+84) 912 345 678
              </div>
            </div>
          </div>
        </div>
        {/* {/* ) : null}
        {mission.status === "not accepted" || !user ? (
          <button
            className="mission-details--button mission-details--join-button"
            onClick={HandleAcceptMissionClicked}
          >
            Tham gia
          </button> */}
        <div className="mission-details--button-container">
          {/* {!user ||
          (userDoc.role !== "admin" && !userMissionLink.userStatus) ? ( */}
          <button
            className="mission--button mission--join_button"
            // onClick={HandleAcceptMissionClicked}
          >
            Tham gia
          </button>
          {/* ) : (
            <>
              {userDoc.role === "user" && mission.status !== "done" ? (
                <>
                  <button
                    className="mission-details--button mission-details--upload_button"
                    onClick={HandleUploadImageClicked}
                  >
                    <span className="mission-details--plus_sign">&#43;</span>{" "}
                    Tải ảnh lên
                  </button>
                  <button
                    className="mission-details--button mission-details--cancel_button"
                    onClick={HandleCancelMissionClicked}
                  >
                    Hủy nhiệm vụ
                  </button>
                </>
              ) : null}
            </>
          )} */}
        </div>
      </div>
      <div className="mission-details--mission-hero">
        <img src={missionImg} alt="" className="mission-details--mission-img" />
        <div className="mission-details--dots">
          <img src={dot1} alt="" className="mission-details--dot" />
          <img src={dot2} alt="" className="mission-details--dot" />
          <img src={dot3} alt="" className="mission-details--dot" />
        </div>
      </div>
      <div className="mission-details--mission-info">
        <div className="mission-details--mission-description">
          Lorem ipsum dolor sit amet consectetur. Lectus ac viverra auctor in
          pretium blandit feugiat nibh. Phasellus arcu risus vulputate risus
          nunc fermentum. Purus vel pretium elementum parturient et in
          suspendisse non diam. Quisque magna sed cras et in pulvinar.
        </div>
        <div className="mission-details--mission-instruction">
          <div className="mission-details--title">Hướng dẫn:</div>
          <ul>
            <li>Bước 1: Đăng ký nhận nhiệm vụ</li>
            <li>Bước 2: Thực hiện nhiệm vụ làm sạch</li>
            <li>
              Bước 3: Chụp ảnh khu vực được làm sạch (Toàn cảnh, cận cảnh)
            </li>
            <li>Bước 4: Up ảnh lên chờ xét duyệt</li>
            <li>Bước 5: Nhận điểm</li>
          </ul>
        </div>
        <div className="mission-details--mission-regulation">
          <div className="mission-details--title">Quy định:</div>
          <div className="mission-details--regulation-text">
            Bạn cần phải hoàn thành nhiệm vụ trong vòng tối đa {3} ngày. Sau 3
            ngày nhiệm vụ sẽ tự động hủy
          </div>
        </div>
      </div>
      <img src={map} alt="" className="mission-details--map" />
    </main>
  );
};

export default MissionDetails;
