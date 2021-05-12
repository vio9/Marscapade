import "./WallE.scss";
import { Link } from "react-router-dom";
import wallePng from "../../assets/wall-e.png";

export default function WallE() {
  return (
    <div>
      <a href="http://localhost:8080" className="wall-e">
        <p>Need help ?</p>
        <span></span>
        <img src={wallePng} alt="wall-e the bot"></img>
      </a>
    </div>
  );
}
