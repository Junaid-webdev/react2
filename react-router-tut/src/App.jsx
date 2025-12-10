import { useActionState, useState } from "react";
import "./App.css";
function App() {



  const handleLogin = (prevData, formData) => {
    let name = formData.get('name')
    let password = formData.get('password')
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 8) {
      return { error: "Only 8 charcters ",name,password }
    } else if (!regex.test(password)) {
      return { error: "Only numbers and alphabetes",name,password }
    }
    return { message: "You are successfully login!" }
  }

  const [data, formAction, pedding] = useActionState(handleLogin);
  console.log(data);

  return <>
    <div>

      <h1>Validation with UseAction in React  </h1>
      {data?.message && <h2 style={{ color: "green" }}>{data.message}</h2>}
      {data?.error && <h2 style={{ color: "red" }}>{data.error}</h2>}
      <form action={formAction}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Your Name" />
        <br /><br />
        <input defaultValue={data?.password} type="text" name="password" placeholder="Enter user Password" />
        <br /><br />
        <button type="submit">Login</button>
          </form>

    </div>



  </>


}
export default App;