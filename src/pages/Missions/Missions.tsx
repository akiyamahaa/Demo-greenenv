import React from "react";
import MissionCard from "./components/MissionCard";

type Props = {};

const MissionCards = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

// TODO: Make three Button to filter missions: Happening, Coming, Expired
const Missions = (props: Props) => {
  return (
    <div style={{ padding: "120px 0" }}>
      {MissionCards.map((missionCard) => {
        return <MissionCard id={missionCard.id} />;
      })}
    </div>
  );
};

export default Missions;
