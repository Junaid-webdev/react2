import {Routes,Route, NavLink } from 'react-router'
import UserAdd from './AddUser'
import UserApp from './Userlist1'


export default function App() {


  return <>
<div>
  <ul style={{ display:'flex',width:'400px',justifyContent:'space-around',listStyle:'none' }}>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
       <NavLink to="/add">Add User</NavLink>
    </li>
  </ul>
    {/* <h1>Make Routes and Pages for add user and list UI</h1> */}
    <Routes >
      <Route path="/" element={<UserApp />} />
      <Route path="add" element={<UserAdd />} />
    </Routes>
</div>
  </>
}