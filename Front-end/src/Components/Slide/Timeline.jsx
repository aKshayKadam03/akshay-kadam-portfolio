import React from "react";
import { Chrono } from "react-chrono";
import school from "../Icons/school.svg";
import graduation from "../Icons/graduation.svg";

const educationItems = [
  {
    title: "2005-13",
    cardTitle: "Royal Palace School",
    cardSubtitle: "Graduated high school from here",
    cardDetailedText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
  },
  {
    title: "2013-15",
    cardTitle: "Govindram Seskaria College of Science",
    cardSubtitle: "Pre-University",
    cardDetailedText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
  },
  {
    title: "2015-20",
    cardTitle: "KLE's Dr M.S Sheshgiri college of engineering and technology",
    cardSubtitle: "Bachelors degree in computer science and engineering",
    cardDetailedText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
  },
  {
    title: "2020-21",
    cardTitle: "Masai School",
    cardSubtitle: "Full Stack Web Development",
    cardDetailedText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
  },
];

function EducationTimeline() {
  return (
    <>
      <Chrono hideControls mode="VERTICAL" items={educationItems}>
        <div className="chrono-icons">
          <img src={school} alt="school" />
          <img
            src="https://lh3.googleusercontent.com/proxy/-ilI7D96XYAUj1sHMP6tJOR8sp9Efc9kAfuxGnqUCVP_K0k4t8U-6R5wgqo-D1FDc6EENmcCd-xyNRbxwN4fQBCA"
            alt="college"
          />
          <img
            src="https://storage.googleapis.com/ezap-prod/colleges/5299/kle-dr-m-s-sheshgiri-college-of-engineering-and-technology-logo.gif"
            alt="graduation"
          />
          <img
            src="https://d27028dliefpk3.cloudfront.net/static/favicon/favicon.ico"
            alt="skill-school"
          />
        </div>
      </Chrono>
    </>
  );
}

function InternshipTimeline() {
  const internshipItems = [
    {
      title: "2019-20",
      cardTitle: "Digital Marketing and Web development intern",
      cardSubtitle: "Cubicode Digital Media LLP",
      cardDetailedText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
    },
    {
      title: "2020-20",
      cardTitle: "Web Development Intern",
      cardSubtitle: "CrackMbaInterview",
      cardDetailedText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quisquam atque, libero cupiditate iste dolor mollitia quibusdam rem, ipsum reprehenderit nulla doloribus. Qui minus impedit praesentium ipsa distinctio voluptatum voluptate ipsum. Ducimus deleniti, qui dicta autem animi temporibus iusto praesentium! Dolorem ipsa magnam, nulla enim totam quasi culpa cupiditate a!",
    },
  ];
  return (
    <>
      <Chrono hideControls mode="VERTICAL" items={internshipItems}>
        <div className="chrono-icons">
          <img
            src="https://yt3.ggpht.com/a/AATXAJw-9SN50E3jsKsoTsJmAr8lcv47hiyT8lGkSyuC=s900-c-k-c0xffffffff-no-rj-mo"
            alt="cubiccode"
          />
          <img src={graduation} alt="crackMbaInterview" />
        </div>
      </Chrono>
    </>
  );
}

export { EducationTimeline, InternshipTimeline };
