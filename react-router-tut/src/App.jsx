import { useActionState, useState,Activity } from "react";
import "./App.css";
function App() {

  const [showHome,setShowHome]=useState(true)

  return <>
    <div>
  <h1>Activity in React 19.2</h1>
     <button onClick={()=>setShowHome(true)}>Home</button>
     <button onClick={()=>setShowHome(false)}>User Form</button>
     <Activity mode={showHome==true?'visible':'hidden'}>
      <Home/>
     </Activity>
     <Activity mode={showHome==false?'visible':'hidden'}>
      <UserForm/>
     </Activity>
    </div>
  </>
}
function Home(){
  return(
    <h1>Home Page</h1>
  )
}

function UserForm(){
  return(
    <div>
      <h2>User Form</h2>
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Password" />
      <input type="text" placeholder="Enter email" />

    </div>
  )
}
export default App;