import OtterRouter from "./Router";
import Music from "./components/Music";
import Header from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import BackTop from "./components/BackTop";
import "./App.css";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Tour from "reactour";
import { Button } from "@material-ui/core";
import tour1 from "./components/images/tour1.png";
import tour2 from "./components/images/tour2.png";
import tour3 from "./components/images/tour3.png";
import tour4 from "./components/images/tour4.png";

const homeTour = (
  <div className="homeTour">
    <img className="homeTour-image" src={tour1} />
    <div className="homeTour-content">
      <div className="homeTour-title">Discover our beautiful home page</div>
      <p>
        Welcome to MarsCapade ! Let's choose what you want to do on your
        favorite red planet...
      </p>
    </div>
  </div>
);
const circuitsTour = (
  <div className="circuitTour">
    <div className="circuitTour-content">
      <div className="circuitTour-title">Discover our wonderful circuits</div>
      <p>
        Here are all the circuits we offer. You can choose all these wonderful
        landscapes to escape with your imaginary friends. Don't forget to book
        your trip !{" "}
      </p>
    </div>
    <img className="circuitTour-image" src={tour2} />
  </div>
);

const activitiesTour = (
  <div className="activitiesTour">
    <img className="activitiesTour-image" src={tour3} />
    <div className="activities-content">
      <div className="activitiesTour-title">
        Discover our incredible activities
      </div>
      <p>
        On Mars, you also can relax with some specials activities. We've
        selected some just for you. Need to reconnect with nature or watch an
        incredible rovers show, we have all what you need to feel good.{" "}
      </p>
    </div>
  </div>
);

const dashboardTour = <div className="dashboardTour">
    <img className="dashboardTour-image" src={tour4}/>
    <div className="dashboardTour-content">
        <div className="dashboardTour-title">Discover our beautiful dashboard</div>
        <p>If you're an admin, you can find here the way to update circuits and activities for your guests.</p>

    </div>
</div>;

const steps = [
  {
    selector: "#home",
    content: homeTour,
  },
  {
    selector: "#circuits",
    content: circuitsTour,
  },
  {
    selector: "#activities",
    content: activitiesTour,
  },
    {
    selector: "#dashboard",
    content: dashboardTour,
  },
];

function App() {
  const [isTourOpen, setIsTourOpen] = useState(true);

  return (
    <>
      <Music />
      <OtterRouter />
      <BackTop />
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        accentColor="#e79545"
        lastStepNextButton={
          <Button className="tour-button" variant="contained">
            Enjoy your Marscapade !
          </Button>
        }
        rounded={5}
      />
    </>
  );
}

export default App;
