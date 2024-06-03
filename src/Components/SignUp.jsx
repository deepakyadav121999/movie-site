import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {auth} from '../firebase'
const SignUp = () => {
    const[email,setemail] =useState('');
    const[password,setpassword] = useState('')

    const emailChange =(e)=>{
        setemail(e.target.value)
        }
        const passChange =(e)=>{
          setpassword(e.target.value)
        }
      
        const signupbtn =()=>{
            createUserWithEmailAndPassword(auth,email,password).then((res)=>{
            
             alert("Account created Successfully")
              setemail('')
              setpassword('')
            
           
          
            }).catch(res=> alert(res))
        }


  return (
    <section className="bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          MoviesSR    
      </a>
      <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Create an account
              </h1>
             
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" id="email" className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={emailChange}/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" value={password} onChange={passChange}/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button  className="w-full bg-blue-700 text-white bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800" onClick={signupbtn} >Create an account</button>
                  <p className="text-sm font-light text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline text-primary-500">Login here</Link>
                  </p>
            
          </div>
      </div>
  </div>
</section>
  )
}

export default SignUp