import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MissionCard = (props: Props) => {
  return (
    <div>
      <Stack direction={"row"}>
        <Stack flexBasis={"50%"}>
          <Typography>Nhiệm vụ làm sạch</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Lectus ac viverra auctor in
            pretium blandit feugiat nibh. Phasellus arcu risus vulputate risus
            nunc fermentum. Purus vel pretium elementum parturient et in
            suspendisse non diam. Quisque magna sed cras et in pulvinar.
          </Typography>
        </Stack>
        <Box flexBasis={"50%"}></Box>
      </Stack>
    </div>
  );
};

export default MissionCard;
