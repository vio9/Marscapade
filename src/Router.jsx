import {
  BrowserRouter as Router,
  Switch as Framboise,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
/*import useSticky from "./components/hooks/useSticky";*/
import Circuits from "./components/Circuits/Circuits";
import CircuitDetails from "./components/Circuits/CircuitDetails";
import { Footer } from "./components/Footer/Footer";
import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import DashLogin from "./components/Dashboard/DashLogin";

export default function OtterRouter() {
  /*const { isSticky, element } = useSticky()*/
  return (
    <Router>
      <Header />
      <Navbar /*sticky={isSticky}*/ />
      <Framboise>
        <Route path="/circuits/:id" component={CircuitDetails} />
        <Route path="/circuits" component={Circuits} />
        <Route path="/activities/:id" component={ActivityDetail} />
        <Route path="/activities" component={ActivityList} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashlogin" component={DashLogin} />
      </Framboise>
      <Footer />
    </Router>
  );
}
