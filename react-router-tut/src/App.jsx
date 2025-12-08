import { Route, Routes,Link } from "react-router"
import Home from "./Home"
import About from "./about"
function App() {


  return (
    <>
    <Link to="/">Home</Link>
    <br />
    <Link to="about">About</Link>
      <h2>React Router 7 Tutorial </h2>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
