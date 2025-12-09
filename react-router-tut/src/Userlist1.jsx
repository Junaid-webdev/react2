import { useEffect, useState } from "react";

export default function UserApp() {

  const [userData,setUserData]=useState([]);
  const [loding,setLoding]=useState(false)
  useEffect(()=>{
    setLoding(true)
getUserData();
  },[])

  const getUserData = async ()=>{
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoding(false)
    
  }

  return <>
<div>

  {
    !loding?
    userData.map((user,index)=>(
   <ul key={index} style={{ display:"flex",justifyContent:"space-around", border:"1px solid #aaa",margin:"0px",padding:"10px", listStyle:"none",}}>
    <li>{user.name}</li>
    <li>{user.age}</li>
    <li>{user.email}</li>
   </ul>
    ))
    :<h1>Loding Data.......</h1>
  }
</div>
  </>
}