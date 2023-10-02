import React from "react";
import "./JoinInvitation.css";
import { Grid, Stack, Box } from "@mui/material";
import ButtonGradient from "../../../components/form/ButtonGradient";

const JoinInvitation = () => {
  return (
    <Grid className="joinInvitation">
      <Stack className="ji--content_container">
        <div className="ji--headline">Sẵn sàng chung tay</div>
        <div className="ji--text">
          Chúng tôi luôn tìm kiếm những cá nhân tin vào sứ mệnh vì một Việt Nam
          sạch hơn và xanh hơn. Nếu bạn thấy hứng thú tham gia cùng chúng tôi
          hoặc có câu hỏi nào, xin vui lòng liên hệ
        </div>
        <div className="ji--buttons">
          <Box className="ji--button">
            <ButtonGradient
              btnText="greenenv@gmail.com"
              style={{ borderRadius: 8, padding: "24px 22px" }}
            />
          </Box>
          <Box className="ji--button">
            <ButtonGradient
              btnText="(+84) 912 345 678"
              style={{
                borderRadius: 8,
                padding: "24px 22px",
                background: "var(--neutral-black-10, rgba(31, 32, 29, 0.10))",
              }}
            />
          </Box>
        </div>
      </Stack>
    </Grid>
  );
};

export default JoinInvitation;
