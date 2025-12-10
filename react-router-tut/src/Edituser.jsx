import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditUser(){
    
    const {id}=useParams();
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const url = "http://localhost:3000/users/"+id;
    const navigate = useNavigate();


    useEffect(()=>{
        getUserData();
    },[]);

    const getUserData = async ()=>{
     
        let response = await fetch(url);
        response = await response.json();
           console.log(response);
           setName(response.name)
           setAge(response.age);
           setEmail(response.email)
    }

    const updateUserData = async ()=>{
        let response = await fetch(url,{
            method:"Put",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);
        if(response){
            alert("Your Data Updated")
            navigate("/");
        }
        

    }

    return<>
    <div style={{ textAlign:"center" }}>
    <h2>User Edit Page</h2>
    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Your Name" />
    <br /><br />
    <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Your Age" />
    <br /><br />
    <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Your Email" />
    <br /><br />
    <button onClick={updateUserData}>Update User</button>
    </div>
    </>
}
export  default EditUser;