import React from "react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import Footer from "./Footer";
import Nav from "./Nav";

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