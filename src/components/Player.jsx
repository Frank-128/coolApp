import React, { useState, useEffect } from "react";
import Keys from "./Keys";

function Player({ instrument ,checked}) {
  const [format, setFormat] = useState("");
  const styles = {
    padding: "10px",

    display: "flex",
    flexWrap: "wrap",
    height: "100%",
  };
  useEffect(() => {
    if (instrument.startsWith("drum") || instrument.startsWith("snare")) {
      setFormat(".mp3");
    } else if (instrument.startsWith("piano")) {
      setFormat(".wav");
    }
  }, [instrument]);
  return (
      <>
   {checked? <div style={styles}>

      <Keys number={instrument + "/" + instrument + 1 + format} />
      <Keys number={instrument + "/" + instrument + 2 + format} />
      <Keys number={instrument + "/" + instrument + 3 + format} />
      <Keys number={instrument + "/" + instrument + 4 + format} />
      <Keys number={instrument + "/" + instrument + 5 + format} />
      <Keys number={instrument + "/" + instrument + 6 + format} />
    </div>:<div>
        <h1>
        Please switch on the Player

        </h1>
    </div>
   }   </>
  );
}

export default Player;
