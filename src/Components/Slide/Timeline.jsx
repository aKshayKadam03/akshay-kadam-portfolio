import React from "react";
import { Chrono } from "react-chrono";
import ux from "../Images/ux.jpg";

const items = [
  {
    title: "2005",
    cardTitle: "Royal Palace School",
    cardSubtitle: "Graduated high school from here",
    media: {
      type: "IMAGE",
      source: {
        url: ux,
      },
    },
  },
  {
    title: "June 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
];

function Timeline() {
  return (
    <>
      <Chrono useReadMore={false} hideControls mode="VERTICAL" items={items} />
    </>
  );
}

export default Timeline;
