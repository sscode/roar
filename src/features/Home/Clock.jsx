import React from "react";


export default function Clock({time}){


    return(
    <div className="clock"> 
        <p>{("0" + Math.floor((time / 86400000) % 60)).slice(-2)}:</p>
        <p>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</p>
        <p>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</p>
        <p>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</p>
        <p>{("0" + ((time / 10) % 100)).slice(-2)}</p>
    </div>
    )
}