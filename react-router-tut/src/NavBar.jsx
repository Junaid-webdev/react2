import { Link, Outlet } from "react-router";
import './header.css';
export default function NavBar(){
    return<>
    <div>
       <div className="header">
    <Link className="link"><h3>Logo</h3></Link>
  
    <div>
    <ul>
        <li>
               <Link className="link" to="/">Home</Link>
        </li>
        <li>
               <Link className="link" to="/about">About</Link>
        </li>
        <li>
               <Link className="link" to="/login">Login</Link>
        </li>
        <li>
               <Link className="link" to="/college">College</Link>
        </li>
        <li>
               <Link className="link" to="/users">Users</Link>
        </li>
    </ul>
    </div>
    </div>
    <Outlet/>
    </div>
    
    </>
}