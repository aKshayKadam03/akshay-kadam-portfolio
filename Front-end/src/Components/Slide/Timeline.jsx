import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const educationItems = [
  {
    time: "2020-21",
    school: "Masai School",
    course: "Full Stack Web Development",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },
  {
    time: "2015-20",
    school: "KLE's Dr M.S Sheshgiri college of engineering and technology",
    course: "B.E Computer Science",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },
  {
    time: "2013-15",
    school: "Govindram Seskaria College of Science",
    course: "Pre-University",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },
];

function EducationTimeline() {
  return (
    <>
      <VerticalTimeline position="left" layout="1-column-left">
        {educationItems?.map((history) => (
          <EducationTimelineCard {...history} />
        ))}
      </VerticalTimeline>
    </>
  );
}

function EducationTimelineCard({ time, school, course, details }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        textAlign: "left",
        background: "rgb(255, 255, 255)",
        color: "#0e0202",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
      date={time}
      iconStyle={{
        background: "rgb(237, 240, 241)",
        color: "#1a1111",
        transform: "scale(0.4)",
      }}
    >
      <h3
        style={{ color: "#08040a" }}
        className="vertical-timeline-element-title"
      >
        {course}
      </h3>
      <h4
        style={{ color: "#463535" }}
        className="vertical-timeline-element-subtitle"
      >
        {school}
      </h4>
      <p>{details}</p>
    </VerticalTimelineElement>
  );
}

function InternshipTimeline() {
  const internshipItems = [
    {
      time: "2020-20",
      position: "Web Development Intern",
      company: "CrackMbaInterview",
      details: [
        "Revamped the existing website.",
        "Updated WordPress and plugins.",
        "Integrated authentication and authorization.",
        "Integrated payment gateway",
      ],
    },
    {
      time: "2019-20",
      position: "Digital Marketing and Web development intern",
      company: "Cubicode Digital Media LLP",
      details: [
        "Got requirements from clients.",
        "Built and maintained websites with WordPress and basic HTML/CSS.",
        "Did keyword research for SEO.",
      ],
    },
  ];
  return (
    <>
      <VerticalTimeline position="left" layout="1-column-left">
        {internshipItems.map((intern) => (
          <InternshipTimelineCard {...intern} />
        ))}
      </VerticalTimeline>
    </>
  );
}

function InternshipTimelineCard({ time, position, company, details }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        textAlign: "left",
        background: "rgb(255, 255, 255)",
        color: "#161218",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
      date={time}
      iconStyle={{
        background: "rgb(237, 240, 241)",
        color: "#fff",
        transform: "scale(0.4)",
      }}
    >
      <h3
        style={{ color: "#0a070c" }}
        className="vertical-timeline-element-title"
      >
        {position}
      </h3>
      <h4
        style={{ color: "#463535" }}
        className="vertical-timeline-element-subtitle"
      >
        {company}
      </h4>
      <p>
        <ul>
          {details.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </p>
    </VerticalTimelineElement>
  );
}

export { EducationTimeline, InternshipTimeline };
