import Header from "./components/Header";
import {Footer} from "./components/Footer/Footer";
import BackTop from "./components/BackTop";
import "./App.css";
<<<<<<< HEAD
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
=======
import ActivityList from './components/ActivityList';

function App() {
  return (
    <div className="App">
      <Header />

      <ActivityList />
      
    </div>
  );
>>>>>>> 953de0b0766bcf0be791f50883e8ae0e5e545eac
}

export default App;
