import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {ActionTypes } from '../Store/constants/action-types'
import { useState } from 'react';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {setuser} from '../Store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const user = useSelector((state)=>state.user.user)
    const dispatch =useDispatch(ActionTypes.SET_USER)

    const[email,setemail] =useState('');
    const[password,setpassword] = useState('')
    const emailChange =(e)=>{
      setemail(e.target.value)
      } 
      const passChange =(e)=>{
        setpassword(e.target.value)
      }
      const signIn =()=>{
   signInWithEmailAndPassword(auth,email,password).then(()=>{
  
     onAuthStateChanged(auth,(userAuth)=>{
         
      if(userAuth){
    
        dispatch(setuser(true) )
        alert("login successfull")
        // console.log(user)
        }
        else{
         dispatch(setuser(false))
        }
    
    
    })
   }
  
   
   ).catch((err)=>alert(err))
      }
  



  return (
    <section className="bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            MoviesSR    
        </a>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                    Sign in to your account
                </h1>
               
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" name="email" id="email" className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500" placeholder="name@company.com" value={email} required onChange={emailChange}/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" value={password} required onChange={passChange}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-gray-300">Remember me</label>
                            </div>
                        </div>
                     
                    </div>
                    <button  className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800" onClick={signIn}>Sign in</button>
                    <p className="text-sm font-light t text-gray-400">
                        Don’t have an account yet? <Link  to ='/signup' className="font-medium text-primary-600 hover:underline text-primary-500">Sign up</Link>
                    </p>
              
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login