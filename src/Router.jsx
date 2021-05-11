import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import useSticky from "./components/hooks/useSticky";
import Circuits from "./components/Circuits/Circuits";
import CircuitDetails from "./components/Circuits/CircuitDetails";


export default function OtterRouter () {
    const { isSticky, element } = useSticky()
    return (
        <Router>
            <Header/>
            <Navbar sticky={isSticky}/>
            <Switch>
                <Route path="/circuits/:id" component={CircuitDetails} />
                <Route path="/circuits" component={Circuits}/>
                <Route path="/" render={(props) => <Welcome {...props} element={element}/> }/>
            </Switch>
        </Router>
    )
}