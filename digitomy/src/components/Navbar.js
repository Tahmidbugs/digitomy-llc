import React from "react";
import { HiHome } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { FaEye, FaFileAlt, FaUsers, FaHandHoldingUsd } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [logoURL, setlogoURL] = React.useState(
    `${require("../assets/logo.png")}`
  );
  const pathname = window.location.pathname;
  const [selected, setSelected] = React.useState(pathname.substring(1));

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: 100,
      }}
      className="navbarbody"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          paddingLeft: 40,
          paddingRight: 40,
          borderRadius: 30,
          width: "28%",
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
        }}
        className="navbarbody"
      >
        <div style={{ margin: "auto", position: "relative" }}>
          <img
            src={logoURL}
            onMouseEnter={() => setlogoURL(`${require("../assets/logo.png")}`)}
            onMouseLeave={() => setlogoURL(`${require("../assets/logo1.png")}`)}
            style={{
              width: "400px",
              height: "120px",
              position: "relative",
              top: 30,
              marginBottom: 15,
              cursor: "pointer",
            }}
          />
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            padding: 10,
          }}
        >
          <a href="/">
            <div
              className={`listhover ${selected === "" ? "activated" : "-"}`}
              onClick={() => setSelected("about")}
            >
              <div>
                <HiHome size={30} />
              </div>
              <a href="/">
                <span>About</span>
              </a>
            </div>
          </a>
          <a href="/demo">
            <div
              className={`listhover ${selected === "demo" ? "activated" : "-"}`}
              onClick={() => setSelected("demo")}
            >
              <div>
                <FaEye size={30} />
              </div>
              <a href="/demo">
                <span>Demo</span>
              </a>
            </div>
          </a>
          <a href="/patents">
            <div
              className={`listhover ${
                selected === "patents" ? "activated" : "-"
              }`}
              onClick={() => setSelected("patents")}
            >
              <div>
                <FaFileAlt size={30} />
              </div>
              <a href="/patents">
                <span>Patents</span>
              </a>
            </div>
          </a>
          <a href="/team">
            <div
              className={`listhover ${selected === "team" ? "activated" : "-"}`}
              onClick={() => setSelected("team")}
            >
              <div>
                <FaUsers size={30} />
              </div>
              <a href="/team">
                <span>Team</span>
              </a>
            </div>
          </a>
          <a href="/sponsors">
            <div
              className={`listhover ${
                selected === "sponsors" ? "activated" : "-"
              }`}
              onClick={() => setSelected("sponsors")}
            >
              <div>
                <FaHandHoldingUsd size={30} />
              </div>
              <a href="/sponsors">
                <span>Sponsors</span>
              </a>
            </div>
          </a>
          <a href="/contacts">
            <div
              className={`listhover ${
                selected === "contacts" ? "activated" : "-"
              }`}
              onClick={() => setSelected("contacts")}
            >
              <div>
                <MdContactPage size={30} />
              </div>
              <a href="/contacts">
                <span>Contacts</span>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
