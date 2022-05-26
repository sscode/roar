import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Clock from "./Clock";
import { startCounter } from "./startActions";
import { db } from "../../app/config/firebase";
import { setDoc, doc } from "firebase/firestore"



export default function Actions(){

    const dispatch = useDispatch()

    const [rest, setRest] = useState(false)
    const [sprint, setSprint] = useState(false)

    
    const onRest = () => {
        addDB("rest")
        setTime(0)
        setRest(true);
        setSprint(false)
        dispatch(startCounter(true))
    };
    
    const onSprint = () => {
        addDB("sprint")
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
    
    //write to db
    const user = useSelector(state => state.data.user.user)
    
    const addDB = async (type) => {
        const time = Date.now()
        const docName = user.uid + "1"
        // await setDoc(doc(db, "times", user.uid), {start: Date.now()})
        await setDoc(doc(db, "times", docName), {start: time, end: 0, type: type, user: user.uid})
    }   
    
    return(
            <div className="actions">
                <span 
                onClick={() => onRest()}
                className={rest ? "circle counting" : "circle notCounting"}>
                    <p>
                    {rest ? "RESTING" : "REST"}
                    </p>
                </span>                               
                <span 
                onClick={() => onSprint()}
                className={sprint ? "circle counting" : "circle notCounting"}>
                    <p>
                        {sprint ? "SPRINTING" : "SPRINT"}
                    </p>
                </span>  
                < Clock time={time}/>                             
            </div>
    )
}