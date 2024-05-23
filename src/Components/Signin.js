import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = 
() => {
  const [username , setusername] = useState('')
  const [password,setpassword] = useState('')

  const handlesubmit = async (e) =>{
    e.preventDefault();
    console.log(username,password)
    try{
      const user = await fetch('http://localhost:3000/user/login',{
            method : 'POST',
            credentials : 'include',
            body : JSON.stringify({username,password}),
            headers : ({'Content-type': 'application/json'})
          })
          if(user.ok){
            console.log("Succcessfull")
          }
          else{
            console.log("Error")
          }
    }
    catch(err){
      console.log(err)
    }
   
  }

  return (
    <div className='bg-gray-100 p-10 '>
    <div className=' shadow-xl shadow-gray-600 mx-auto  bg-slate-200 w-3/12 min-w-96 text-center rounded-2xl mt-32 mb-32  '> 
      <div className='flex flex-col leading-loose p-8 h-fit'>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide mx-auto lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>

        <h2 className='text-4xl text-gray-600 font-bold mt-3'>Log In</h2>
        <div>
            <label htmlFor="" className='' >Username : </label>
            <input type="email" value={username} onChange={(e)=>{setusername(e.target.value)}} className='bg-gray-400  mt-10 px-2 outline-none rounded-xl w-8/12'/>
        </div>
        
        <div>
            <label htmlFor="">Password : </label>
            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='bg-gray-400 mt-5 px-2 outline-none rounded-xl w-8/12'/>
        </div>
        <p className='mt-3'>Don't have an account?? <Link to="/register"><b className='text-red-500'>Signup</b></Link>  </p>
        <button class="bg-black mt-5 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={handlesubmit}>Log in</button>
      </div>
    </div>
    </div>
  )
}

export default Signin;

