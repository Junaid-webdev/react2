import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./about";
import NavBar from "./NavBar";
import Login from "./Login";
import PageNotFound from "./pageNotFound";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        
      </Routes>
    </>
  );
}

export default App;
