import { useEffect } from "react";
import ptison from "../assets/music.mp3";

export default function Music() {
  return (
    <>
      <figcaption
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "40%",
          margin: "0",
          color: "white",
        }}
      >
        <audio
          controls
          loop="true"
          autoPlay="true"
          src={ptison}
          style={{ display: "flex", justifyContent: "center" }}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figcaption>
    </>
  );
}
