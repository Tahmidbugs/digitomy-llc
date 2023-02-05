import React from "react";
import ryan from "../assets/ryan.png";
import sriram from "../assets/sriram.png";
import brandon from "../assets/brandon.png";
const Team = () => {
  const members = [
    {
      name: "Sriram Chellappan",
      position: "Faculty at USF",
      positionDescription:
        "Professor in the Department of Computer Science and Engineering at University of South Florida.",
      profilePicture: sriram,
    },
    {
      name: "Ryan Carney",
      position: "Faculty at USF",
      positionDescription:
        "Assistant Professor of Digital Science at the University of South Florida.",
      profilePicture: ryan,
    },
    {
      name: "Brandon Wolfram",
      position: "Hardware Design Engineer",
      positionDescription:
        "Hardware Design Engineer and a USF Alum. He is currently pursuing a graduate degree from Georgia-Tech.",
      profilePicture: brandon,
    },
  ];
  return (
    <div
      style={{
        marginTop: 190,
        marginBottom: 100,
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: 40 }} className="title">
        Meet the team
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {members.map((member) => (
          <Card
            key={member.name}
            name={member.name}
            position={member.position}
            positionDescription={member.positionDescription}
            profilePicture={member.profilePicture}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
const Card = ({ name, position, positionDescription, profilePicture }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? "#333" : "#292020",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "1rem",
        padding: "3rem",
        borderRadius: "1rem",
        transition: "all 0.3s ease-in-out",
        boxShadow: hover ? "0 0 10px #fff" : "0 0 5px #333",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={profilePicture}
        alt={name}
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />
      <h3
        style={{
          color: "#fff",
          fontFamily: "Nova Oval, cursive",

          marginBottom: "0.5rem",
        }}
      >
        {name}
      </h3>
      <h4
        style={{
          color: "#ccc",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {position}
      </h4>
      <h4
        style={{
          color: "#ccc",
          textAlign: "center",
        }}
      >
        {positionDescription}
      </h4>
    </div>
  );
};
