import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Timeline = ({ data }) => {
  console.log(data);

  return (
    <VerticalTimeline>
      {data.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.type}`}
          iconStyle={{
            background: item.type === "work" ? "#4c1d95" : "#e11d48",
            color: "#fff",
          }}
          contentStyle={{
            background: item.type === "work" ? "#ede9fe" : "#ffe4e6",
            border: "1px solid",
            borderColor: item.type === "work" ? "#4c1d95" : "#e11d48",
            color: "#000",
            boxShadow: "none",
            borderRadius: "22px",
          }}
          icon={item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
        >
          <h3 className="font-semibold text-xl">{item.field}</h3>
          <div className="flex gap-2 items-center">
            <h1>{item.location}</h1>
            <HiOutlineLocationMarker size={18} className="text-red-500" />
          </div>
          <p>{item.title}</p>

          <div className="flex justify-between items-center">
            <p
              className={
                item.status === "present"
                  ? "bg-green-200 border border-green-500 w-fit px-2 text-green-800 uppercase rounded-full text-xs py-1"
                  : "bg-red-200 border border-red-500 w-fit px-2 text-red-800 uppercase rounded-full text-xs py-1"
              }
            >
              {item.status}
            </p>

            <p>{item.year}</p>
          </div>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: "#fde047", color: "#000" }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
