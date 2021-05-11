import Header from "./components/Header"
import "./App.css"
import useSticky from "./components/hooks/useSticky"
import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar"

function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      {/* <Header /> */}
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
    </>
  )
}

export default App
