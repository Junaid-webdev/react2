import { useState } from "react";
import "./App.css";
function App(){

  const [name,setName]=useState('');
  const [nameErr,setNameErr]=useState();


  const [Password,setPassword]=useState('');
  const [passErr,setpassErr]=useState();

  const handlerName = (event)=>{
    console.log(event.target.value);
    if(event.target.value.length>8){
      setNameErr("Only 8 Characters Allowed");
    }else{
      setNameErr('');
      
    }
  }

  const handlepassword = (event)=>{
    console.log(event.target.value);
    let regex = /^[A-Z0-9]+$/i;
    if(regex.test(event.target.value)){
       setpassErr();
    }else{
    
       setpassErr("Only numbers and alphabets  allowed")
    }
    
  }

  return<>
  <div>

  <input type="text" className={nameErr?'error':''} onChange={handlerName} placeholder="Enter Name" />
  <br />
  <span className="red-color">{nameErr && nameErr}</span>
  <br /><br />
  <input type="text" className={passErr?'error':''}  placeholder="Enter Password" onChange={handlepassword} />
  <br />
    <span className='red-color'>{passErr && passErr }</span>
  <br /><br />
  <button disabled={passErr || nameErr}>Login</button>

  </div>
  


  </>


}
export default App;