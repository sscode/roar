import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Actions";
import Clock from "./Clock";
import Footer from "./Footer";
import Nav from "./Nav";
import { updateStart } from "./startActions";


export default function Lion(){

    let start = useSelector(state => state.data.start)
    if(!start){
        start = false
        return(
            <div class="lion">
                < Nav />
                <p>work like a lion</p>
                < Footer />
            </div>
     
        )
    } else {
        return(
            <div class="lion">
                < Nav />
                < Actions />
                {/* < Clock /> */}
            </div>
     
        )
    }
}