import { useState } from "react";

function UserAdd(){

    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();

    const createUser = async ()=>{
        const url  = 'http://localhost:3000/users';
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({name,age,email})
        });

        response = await  response.json();
        if(response){
            alert("New User Added ")
        }

    }
    return<>
    <div style={{ textAlign:"center" }}>
    <h1>Add New  User</h1>
    <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Your Name" />
    <br /><br />
    <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Your Age" />
    <br /><br />
    <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Your Email" />
    <br /><br />
    <button onClick={createUser}>Add User</button>
    </div>
    </>
}
export  default UserAdd;