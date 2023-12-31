import "./App.css"
import LandingPage from "./Component/LandingPage/landingPage"
import Login from "./Component/Login/Login"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import Blogs from "./Component/Blogs/Blogs"
import SignUp from "./Component/SignUp/SignUp"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </div>
  )
}
export default App
