import React, { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./startActions.js";



export default function Register(){

    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassowrd, setRegisterPassword] = useState("")

    const userHandler = () => {
        setModal(!modal)
    }

    const user = useSelector(state => state.data.user.user)

    // console.log(user)

    //register
    const register = async () => {
        try {
            const newEmail = registerEmail
            console.log(newEmail)
            const user = await createUserWithEmailAndPassword(auth, newEmail, registerPassowrd)
            // disptach(updateUser(user))
            setRegisterEmail("")
            setRegisterPassword("")
            dispatch(updateUser(user))
            userHandler()
        } catch (error) {
            setRegisterEmail("")
            setRegisterPassword("")
            console.log(error.message)
            // toast.error("Invalid username/password")
        }

    }

        //auth
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassowrd)
            dispatch(updateUser(user))
            userHandler()
        } catch (error) {
            setRegisterPassword("")
            console.log(error.message)
        }
    }

    const logout = async () => {
        //signout
        await signOut(auth)
        dispatch(updateUser(""))
        //clear stocks
    }

    
    if(!modal){
        return(
        <>
        {user ? <>
                <button
                className="register"
                onClick={() => logout()}>logout</button> 
            </>:
        <>
            <button
            className="register"
            onClick={() => userHandler()}>SIGN-UP // LOGIN</button> 
        </>
        } 
        </>
                 )
    } else {
        return(
            <div className="modal">
                <div className="signInputs">
                    <input type="text" value={registerEmail} placeholder="email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                    <input type="password" value={registerPassowrd} placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                </div>
                <div className="signButtons">
                    <button onClick={() => register()}>Register</button>
                    <button onClick={() => login()}>Login</button>
                </div>
            </div>
        )
    }
}