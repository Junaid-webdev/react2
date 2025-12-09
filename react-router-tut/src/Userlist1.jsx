import { useEffect, useState } from "react";

export default function UserApp() {

  const [userData, setUserData] = useState([]);
  const [loding, setLoding] = useState(false);
 const url = "http://localhost:3000/users";
  useEffect(() => {
    setLoding(true);
    getUserData();
  }, []);

  const getUserData = async () => {
   
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoding(false);
  };

  const deleteUser = async (id) =>{
  let response = await fetch(url+"/"+id,{
    method:'delete'

  })
    response = await response.json()
    if(response){
      alert("Record Deleted")
      getUserData();
    }
  }

  return (
    <>
      <div style={{ width: "80%", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center" }}>User List</h2>

        {loding ? (
          <h1>Loading Data…</h1>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0px 0px 10px #ccc",
              fontSize: "18px",
            }}
          >
            <thead>
              <tr style={{ background: "#f0f0f0", height: "50px" }}>
                <th style={{ border: "1px solid #999", padding: "10px" }}>ID</th>
                <th style={{ border: "1px solid #999", padding: "10px" }}>Name</th>
                <th style={{ border: "1px solid #999", padding: "10px" }}>Age</th>
                <th style={{ border: "1px solid #999", padding: "10px" }}>Email</th>
                <th style={{ border: "1px solid #999", padding: "10px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {userData.map((user) => (
                <tr
                  key={user.id}
                  style={{ textAlign: "center", height: "45px" }}
                >
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.id}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.name}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.age}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {user.email}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                 <button onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
