import React from "react";
import { useDispatch } from "react-redux";
import { updateStart } from "./startActions";


export default function Footer(){
    
    const dispatch = useDispatch()

    const startHandler = () => {
        console.log("Yes")
        dispatch(updateStart())
    }
    
    return(
            <button onClick={() => startHandler()}>→</button> 
    )
}