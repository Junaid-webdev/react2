import { NavLink, Outlet } from "react-router";

export default function  Collge(){

return<>

<div className="college" style={{ textAlign:"center", margin:"20px" }}>
<h2>College Page</h2>
<NavLink className="link" to="student">Student</NavLink>
<NavLink className="link" to="departments">Departments</NavLink>
<NavLink className="link" to="details">College Details</NavLink>
<Outlet />
</div>
</>

}