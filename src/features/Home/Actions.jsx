import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Clock from "./Clock";
import { startCounter } from "./startActions";


export default function Actions(){

    const dispatch = useDispatch()

    const [rest, setRest] = useState(false)
    const [sprint, setSprint] = useState(false)

    
    const onRest = () => {
        setTime(0)
        setRest(true);
        setSprint(false)
        dispatch(startCounter(true))
    };
    
    const onSprint = () => {
        setTime(0)
        setRest(false);
        setSprint(true)
        dispatch(startCounter(true))
        
    };
    
    //timer
    const [time, setTime] = useState(0)
    let timer = useSelector(state => state.data.time)

    useEffect(() => {
        let interval = null

        if(timer){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            return () => clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timer])

    return(
            <div className="actions">
                <span 
                onClick={() => onRest()}
                className={rest ? "circle counting" : "circle notCounting"}>
                    <p>
                        REST
                    </p>
                </span>                               
                <span 
                onClick={() => onSprint()}
                className={sprint ? "circle counting" : "circle notCounting"}>
                    <p>
                        SPRINTING
                    </p>
                </span>  
                < Clock time={time}/>                             
            </div>
    )
}