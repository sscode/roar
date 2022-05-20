import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function Clock({time}){


    return(
    <div className="clock"> 
        <p>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</p>
        <p>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</p>
        <p>{("0" + ((time / 10) % 100)).slice(-2)}</p>
    </div>
    )
}