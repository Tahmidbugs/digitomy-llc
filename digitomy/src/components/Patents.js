import React from "react";
import { TbLicense } from "react-icons/tb";

const Patents = () => {
  const pats = [
    {
      title: "US Patent 10,963,742",
      description:
        "Sriram Chellappan, Pratool Bharti, Mona Minakshi, Willie McClinton and Jamshidbek Mirzakhalov, “Leveraging smart-phone cameras and image processing techniques to classify mosquito genus and species”",
    },
    {
      title: "US Patent 11,048,928",
      description:
        "Sriram Chellappan, Mona Minakshi, Jamshidbek Mirzakhalov, Sherzod Kariev and Willie McClinton, “Systems and methods of entomology classification based on extracted anatomies”",
    },
    {
      title: "Application US17/496,563 (Pending)",
      description:
        "Sriram Chellappan, Stephen Edward Saddow, Ryan Marc Carney, Brandon Wolfram and Mark Weston, “Smart mosquito trap for mosquito classification”",
    },
  ];
  return (
    <>
      <div style={{ marginTop: 190, marginBottom: 80 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 40 }} className="title">
            Patented Creations
          </h1>
          <br />
          <br />

          <h3
            style={{
              fontSize: 40,

              fontFamily: "Marck Script",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            "Our patented algorithms and patent pending smart mosquito trap will
            revolutionize surveillance of vector mosquitoes via automation.""
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          {pats.map((item) => {
            return <Card title={item.title} description={item.description} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Patents;

const Card = ({ title, description }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? "#384F62" : "#3C6B86",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: 10,
        width: "30%",
        padding: 20,

        borderRadius: 20,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          backgroundColor: hover ? "#3C6B86" : "#384F62",
          width: "50px",
          height: "50px",
          display: "flex",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <TbLicense
          style={{ color: `${hover ? "#99AFC6" : "#99AFC6"}` }}
          size={40}
        />
      </div>
      <h3
        style={{
          color: hover ? "#99AFC6" : "black",
          fontWeight: "700",
          transition: "all 0.3s ease-in-out",
          transform: hover ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: hover ? "#99AFC6" : "black",
          fontWeight: "700",
          transition: "all 0.3s ease-in-out",
          transform: hover ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        {description}
      </p>
    </div>
  );
};
