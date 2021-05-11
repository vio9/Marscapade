import Header from "./components/Header";
import {Footer} from "./components/Footer/Footer";
import BackTop from "./components/BackTop";
import "./App.css";
import useSticky from "./components/hooks/useSticky";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {
    const {isSticky, element} = useSticky();
    return (
        <>
            <Header/>
            <Navbar sticky={isSticky}/>
            <Welcome element={element}/>
            <BackTop/>
            <Footer/>
        </>
    );
}

export default App;
