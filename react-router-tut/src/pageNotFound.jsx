import { Link } from "react-router";

export default function PageNotFound(){
return<>
<div style={{ textAlign:"center" }}>
<div style={{ margin:"20px" }}>
  <Link to="/">Go to Home</Link>
</div>
<img style={{ width:"60%", margin:"20px"}} src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small/404-landing-page-free-vector.jpg" alt="" />
</div>
</>
}