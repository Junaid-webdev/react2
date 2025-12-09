import { Link, useParams } from "react-router"

export default function UserDetails(){

    const paramsData = useParams();
   
    return <>
    <h1>User Details Page</h1>
    <h3>User Id is : {paramsData.id}</h3>
    <h4><Link to="/users">Back</Link></h4>
    </>
}