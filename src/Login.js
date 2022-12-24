import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilePic] = useState("");
    const dispatch = useDispatch();  //to move user info into the redux

    const loginToApp = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL:userAuth.user.photoURL,
            }))
        }).catch((error)=>alert("Seems you don't have an account here please register bro!"));
    };

    const register = () => {
        if(!name){
            return alert("Please enter a name !!");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
                userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL:profilePic,
                }))
            })
        }).catch(error=>alert(error));
    };
    return (
        <div className='login'>
            <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png" alt="" />
            <form>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Full Name' required />
                <input 
                    type="text" 
                    value={profilePic}
                    onChange={(event)=>setProfilePic(event.target.value)}
                    placeholder='profile pic URL(optional)'/>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)}
                    placeholder='Email'
                    required />
                <input 
                    type="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder='Password'/>

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{"    "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>

    )
}

export default Login
