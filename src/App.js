import "./App.css"
import Home from "./Component/Home/Home"
import LandingPage from "./Component/LandingPage/landingPage"
import Login from "./Component/Login/Login"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
