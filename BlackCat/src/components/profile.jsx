import React from "react"
import { useState } from 'react'

const Profile = (props) =>{
    console.log(props)
    let [c,setc]= useState(0);
    let [bg, setbg]=useState("#ffff")
    function incre(){
        setc(c+1);
        console.log("hello",c)
    }
    function cbg(){
        setbg("#111222");

    }
    return(
       <>
         <div style={{border : "solid", borderRadius : "12px",backgroundColor:bg}}>
             <div>
                 <button onClick={incre}>Clickkkk</button>
                 <button onClick={cbg}>Change to this color</button>
                 <p>This i {c}</p>
             </div>
             <p>{props.age} is the age</p>
             <h1 style={{color: "red"}}>Hello, {props.name}</h1>
             <h5>Is this ur mail {props.email}??</h5>
         </div>
       </>
    )
};
export default Profile;
