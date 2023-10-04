import React from "react";
import MissionCard from "./components/MissionCard";

type Props = {};

const Missions = (props: Props) => {
  return (
    <div>
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
      <MissionCard />
    </div>
  );
};

export default Missions;
