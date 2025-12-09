import { useEffect, useState } from "react";

export default function App() {

  const [userData,setData]=useState([]);
  useEffect(() => {
    getUserData();
  }, [])

  async function getUserData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url)
    response = await response.json()
  setData(response)
  }
  console.log(userData);
  

  return <>
<h1>Fetch data form api </h1>
<ul style={{ display:"flex",justifyContent:"space-around", border:"1px solid #aaa",margin:"0px",padding:"10px", fontSize:"20px",listStyle:"none",background:"#ccc"}}>
      <li style={{ textAlign:"center" }}>FirstName</li>
      <li style={{ textAlign:"center" }}>Last Name</li>
      <li style={{ textAlign:"center" }}>Email</li>
      <li style={{ textAlign:"center" }}>Address</li>
     </ul>
{
    userData && userData.map((user,index)=>(
     <ul key={index} style={{ display:"flex",justifyContent:"space-around", border:"1px solid #aaa",margin:"0px",padding:"10px", listStyle:"none",  }}>
      <li style={{ textAlign:"center" }}>{user.name}</li>
      <li style={{ textAlign:"center" }}>{user.username}</li>
      <li style={{ textAlign:"center" }}>{user.email}</li>
      <li style={{ textAlign:"center" }}>{user.address.street}</li>
     </ul>
  ))
}
  </>
}