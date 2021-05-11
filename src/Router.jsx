import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
/*import useSticky from "./components/hooks/useSticky";*/
import Circuits from "./components/Circuits/Circuits";
import CircuitDetails from "./components/Circuits/CircuitDetails";
import {Footer} from "./components/Footer/Footer";
import ActivityList from './components/ActivityList';
import ActivityDetail from "./components/ActivityDetail";


export default function OtterRouter () {
    /*const { isSticky, element } = useSticky()*/
    return (
        <Router>
            <Header/>
            <Navbar /*sticky={isSticky}*/ />
            <Switch>
                <Route path="/circuits/:id" component={CircuitDetails} />
                <Route path="/circuits" component={Circuits}/>
                <Route path="/activities/:id" component={ActivityDetail} />
                <Route path="/activities" component={ActivityList}/>
                <Route exact path="/" component={Welcome} /*render={(props) => <Welcome {...props} element={element}/> } *//>
            </Switch>
            <Footer/>
        </Router>
    )
}