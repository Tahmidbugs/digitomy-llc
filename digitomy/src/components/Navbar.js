import React from "react";
import { HiHome } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { FaEye, FaFileAlt, FaUsers, FaHandHoldingUsd } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [logoURL, setlogoURL] = React.useState(
    `${require("../assets/logo.png")}`
  );
  const pathname = window.location.pathname;
  const [selected, setSelected] = React.useState(pathname.substring(1));
  if (selected == "") setSelected("About");
  console.log(selected);
  const data = [
    { text: "About", icon: <HiHome size={30} />, href: "/" },
    { text: "Demo", icon: <FaEye size={30} />, href: "/demo" },
    { text: "Patents", icon: <FaFileAlt size={30} />, href: "/patents" },
    { text: "Team", icon: <FaUsers size={30} />, href: "/team" },
    {
      text: "Sponsors",
      icon: <FaHandHoldingUsd size={30} />,
      href: "/sponsors",
    },
    { text: "Contacts", icon: <MdContactPage size={30} />, href: "/contacts" },
  ];

  return (
    <div className="navbarbody navbarOuterBox">
      <div className="navbarbody navbarlogoContainer">
        <div
          style={{ margin: "auto", position: "relative", left: 0, right: 0 }}
        >
          <img
            src={logoURL}
            onMouseEnter={() => setlogoURL(`${require("../assets/logo1.png")}`)}
            onMouseLeave={() => setlogoURL(`${require("../assets/logo.png")}`)}
            className="logo"
          />
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            padding: "auto",
          }}
        >
          {data.map(({ text, icon, href }) => (
            <a key={text} href={href}>
              <div
                className={`listhover ${
                  selected.toLowerCase() === text.toLowerCase()
                    ? "activated"
                    : "-"
                }`}
                onClick={() => setSelected(text.toLowerCase())}
              >
                <div>{icon}</div>
                <a href={href}>
                  <span>{text}</span>
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
