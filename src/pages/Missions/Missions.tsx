import React from "react";
import MissionCard from "./components/MissionCard";
import { BrowserRouter, Route, useParams, Routes } from "react-router-dom";
import MissionDetails from "../MissionDetails/MissionDetails";

type Props = {};

const MissionCards = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

const Missions = (props: Props) => {

  return (
    <div style={{ padding: "120px 0" }}>
      {/* <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard /> */}

      {MissionCards.map((missionCard) => {
        return <MissionCard id={missionCard.id} />;
      })}
    </div>
  );
};

export default Missions;
