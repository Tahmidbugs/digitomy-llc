import React from "react";
const Demo = () => {
  const toRotate = [
    { text: "AI", color: "#3F5681" },
    { text: "Malaria", color: "#5757D4" },
    { text: "Mosquitoes", color: "#CD6829" },
    { text: "Chikungunya", color: "#A4429B" },
    { text: "Algorithms", color: "#E78C19" },
    { text: "Public-Health", color: "#77307E" },
    { text: "Zika", color: "#428157" },
    { text: "Culex", color: "#9C4A87" },
    { text: "stephensi", color: "#15927D" },
    { text: "Smart-trap", color: "#68873A" },
    { text: "Automation", color: "#0D6A8F" },
    { text: "Dengue", color: "#763829" },
    { text: "Larva", color: "#5747AF" },
    { text: "Aedes", color: "#DD9308" },
    { text: "Computer-Vision", color: "#0B7E44" },
  ];
  const toRotate3 = [];
  for (let i = 0; i < toRotate.length; i += 6) {
    toRotate3.push(toRotate.slice(i, i + 6));
  }
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState({ text: "", color: "" });
  const [delta, setDelta] = React.useState(50);

  React.useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate3.length;
      let fullText = toRotate3[i].map((r) => r.text).join(" ");

      if (isDeleting) {
        setText({
          text: fullText.substring(0, text.text.length - 1),
          color: text.color,
        });
      } else {
        setText({
          text: fullText.substring(0, text.text.length + 1),
          color: toRotate3[i][0].color,
        });
      }

      setDelta(150 - Math.random() * 100);

      if (isDeleting && text.text === "") {
        setIsDeleting(false);
        setLoopNum(i + 1);
      } else if (!isDeleting && text.text === fullText) {
        setIsDeleting(true);
        setDelta(1000);
      }
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, isDeleting, text, delta, toRotate3]);

  return (
    <>
      <div style={{ marginTop: 150 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 200,
            marginBottom: 200,
          }}
        >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              width: "50%",
              flexWrap: "wrap",
            }}
          >
            {text.text === "" ? (
              <h1 className="">s</h1>
            ) : (
              <h1
                style={{
                  fontFamily: "Nova Oval",
                  fontSize: 60,
                  fontWeight: "900",
                  position: "relative",
                }}
              >
                {text.text.split(" ").map((word, index) => {
                  return (
                    <span key={index} style={{ color: toRotate[index].color }}>
                      {word}{" "}
                    </span>
                  );
                })}
                <span
                  style={{
                    background: "black",
                    height: "50px",
                    width: "10px",
                    display: "inline-block",
                    position: "relative",

                    left: `${(100 * 0) / text.text.length}%`,
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </h1>
            )}
          </div>

          <div style={{ margin: "auto", textAlign: "center", width: "50%" }}>
            <video width="400" controls>
              <source
                src="https://www.youtube.com/watch?v=b7Bcpd4vR5w&ab_channel=shinduuu"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
