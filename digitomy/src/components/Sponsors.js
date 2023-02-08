import React from "react";
import nasa from "../assets/nasa.png";
import nsf from "../assets/nsf.png";
import usf from "../assets/usf.png";
import cdc from "../assets/cdc.png";

const Sponsors = () => {
  return (
    <>
      <div style={{ marginTop: 190, marginBottom: 80 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 40 }} className="title">
            Collaborative Efforts
          </h1>
          <br />
          <br />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <img
            src={nasa}
            alt="NASA logo"
            style={{
              width: 400,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 0,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.4)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => window.open("https://www.nasa.gov/", "_blank")}
          />
          <img
            src={nsf}
            alt="NSF logo"
            style={{
              width: 280,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 50,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.4)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => window.open("https://www.nsf.gov/", "_blank")}
          />
          <img
            src={usf}
            alt="USF logo"
            style={{
              width: 270,
              height: 250,
              margin: 30,
              cursor: "pointer",
              marginRight: 80,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.4)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => window.open("https://www.usf.edu/", "_blank")}
          />
          <img
            src={cdc}
            alt="CDC logo"
            style={{
              width: 280,
              height: 280,
              margin: 30,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.4)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => window.open("https://www.cdc.gov/", "_blank")}
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
