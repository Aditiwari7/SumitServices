import React from "react";
import img from "../assets/xyz4.jpg"

function home() {
    return (
        <div style={{backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:580, maxWidth:1500}}>
            <div style={{paddingLeft: 100, color:"white"}}>
                <h3 style={{ fontSize: 45, paddingTop:200 }}>One Stop Solution for</h3>
                <h1 style={{ fontSize: 80 }}>Telecom Services</h1>
            </div>
        </div>
    )
}

export default home