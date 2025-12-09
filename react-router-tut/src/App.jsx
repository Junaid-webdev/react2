import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./about";
import NavBar from "./NavBar";
import Login from "./Login";
import PageNotFound from "./pageNotFound";
import Collge from "./College";
import Student from "./Student";
import Departments from "./Department";
import Details from "./Details";
import UserList from "./UserList";
import UserDetails from "./UserDetails";


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/list?" element={<UserList/>}/>
          <Route path="/users/:id/:name?" element={<UserDetails />} />
        </Route>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path="/college" element={<Collge />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="details" element={<Details />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
