import { Link } from "react-router";
export default function UserList(){

    const userData = [
        { id:1, name:"Sameer"},
        { id:2, name:"Shyam"},
        { id:3, name:"Tanveer"},
        { id:4, name:"Aman"},
        { id:5, name:"Sunder"},
    ]

    return <>
    <h1>User List Page</h1>
    {
        userData.map((item,index)=>(
            <div key={index}>
                <h4><Link to={"/users/"+item.id} >{item.name}</Link></h4>
                
            </div>
        ))
    }
    <h1>User List Page With URL</h1>
    {
        userData.map((item,index)=>(
            <div key={index}>
                <h4><Link to={"/users/"+item.id+"/"+item.name} >{item.name}</Link></h4>
                
            </div>
        ))
    }
    </>
}