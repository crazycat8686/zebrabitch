import React  from "react";
import {useState,useEffect} from "react";
import axios from "axios";
export default function Api(props){
    let [res,sres]=useState("");
    useEffect(()=>{axios.get("https://api.ipify.org?format=json")
        .then((f)=> {
            localStorage.setItem("l", f.data.ip);console.log(f)
        })
        .catch((er)=>console.log(er));
        axios.get(`https://ip-api.com/json/${localStorage.getItem("l")}`)
        .then((y)=>{console.log(y.data);sres(y.data.city);localStorage.setItem("lat",y.data.lat);localStorage.setItem("lon",y.data.lon)})
        .catch((x)=>console.log(x))
        },[])


    return(
      <div>
          {/*{res.map((x)=>{return(*/}
          {/*    <div>*/}
          {/*        <h1>{x.name}</h1>*/}
          {/*    </div>*/}
          {/*)})}*/}
          <p> fuck u ik ur location: {res}</p>
          <iframe
              title="map"
              width="90%"
              height="400"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${localStorage.getItem("lat")},${localStorage.getItem("lon")}&hl=es;z=14&output=embed`}
          ></iframe>

      </div>

    )
}