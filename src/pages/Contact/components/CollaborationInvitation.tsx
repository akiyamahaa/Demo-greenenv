import React, { useEffect } from "react";
import "./CollaborationInvitation.css";
import sendIcon from "./img/end icon.svg";
import { useState } from "react";

const CollaborationInvitation = () => {
  const [colabName, setColabName] = useState("");
  const [colabEmail, setColabEmail] = useState("");
  const [colabMessage, setColabMessage] = useState("");

  return (
    <div>
      <div className="collaborationInvitation">
        <div className="ci--text">
          <div className="ci--headline">Bạn có một dự án?</div>
          <div className="ci--instructions">
            <div className="ci--instruction1">
              Sử dụng biểu mẫu để liên hệ và đóng góp với chúng tôi. Chúng tôi
              sẽ liên hệ với bạn khi có thể
            </div>
            <div className="ci--instruction2">
              Ngoài ra, hãy liên lạc bằng cách sử dụng thông tin bên dưới.
            </div>
          </div>
          <div className="ci--contacts">
            <div className="ci--contact_email">greenenv@gmail.com</div>
            <div className="ci--contact_call">(+84) 912 345 678</div>
          </div>
        </div>
        <div className="ci--form">
          <div className="ci--personal_info">
            <input
              type="text"
              className="ci--form_name"
              placeholder="Tên"
              value={colabName}
              onChange={(e) => setColabName(e.target.value)}
              required
            />
            <input
              type="email"
              className="ci--form_email"
              placeholder="Email"
              value={colabEmail}
              onChange={(e) => setColabEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            className="ci--form_details"
            placeholder="Chi tiết"
            value={colabMessage}
            onChange={(e) => setColabMessage(e.target.value)}
            required
          />
          <div className="ci--btn_container">
            <button className="ci--send">
              Gửi
              <img src={sendIcon} alt="" className="ci--send_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationInvitation;