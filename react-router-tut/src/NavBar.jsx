import { NavLink, Outlet } from "react-router";
import './header.css';
export default function NavBar(){
    return<>
    <div>
       <div className="header">
    <NavLink className="NavLink"><h3>Logo</h3></NavLink>
  
    <div>
    <ul>
        <li>
               <NavLink className="NavLink" to="/">Home</NavLink>
        </li>
        <li>
               <NavLink className="NavLink" to="/about">About</NavLink>
        </li>
        <li>
               <NavLink className="NavLink" to="/login">Login</NavLink>
        </li>
        <li>
               <NavLink className="NavLink" to="/college">College</NavLink>
        </li>
        <li>
               <NavLink className="NavLink" to="/users">Users</NavLink>
        </li>
        <li>
               <NavLink className="NavLink" to="/users/list">List</NavLink>
        </li>
    </ul>
    </div>
    </div>
    <Outlet/>
    </div>
    
    </>
}