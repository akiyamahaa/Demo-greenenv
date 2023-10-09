import React from "react";
import MissionCard from "./components/MissionCard";

type Props = {};

const Missions = (props: Props) => {
  return (
    <div style={{padding: "120px 0"}}>
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
    </div>
  );
};

export default Missions;
