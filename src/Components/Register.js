import React, { useState } from 'react'

const Register = 
() => {

  const [username , setusername] = useState('')
  const [password,setpassword] = useState('')

  const handlesubmit =async (e) =>{
      e.preventDefault();
      try{
      const response = await fetch('http://localhost:3000/user/signup',{
                method : 'POST',
                body : JSON.stringify({username,password}),
                headers : ({'Content-type' : 'application/json'})
              })

              if(response.ok){
                console.log(response.headers)
                console.log("Succesful")
              }
              else{
                console.log("Failed")
              }
      }
      catch(err){
          console.log(err)
      }

        

  }
  return (

    <div className='bg-gray-100 p-10 '>
    <div className=' shadow-xl shadow-gray-600 w-3/12 bg-opacity-50 min-w-96 bg-slate-200  text-center rounded-2xl mt-32 mb-32  mx-auto'> 
      <div className='flex flex-col leading-loose p-8 '>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide mx-auto lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>

        <h2 className='text-4xl text-gray-600  font-bold mt-3'>Register form</h2>
        
            <label htmlFor="" className='text-left mt-9 ml-10'>Username : </label>
            <input type="email" value={username} onChange={(e)=>{setusername(e.target.value)}} className='bg-gray-400 w-9/12   ml-10 px-2 outline-none rounded-xl '/>
        
            <label htmlFor="" className='text-left ml-10'>Enter password : </label>
            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='bg-gray-400 w-9/12 px-2  ml-10 outline-none rounded-xl '/>

        <button onClick={handlesubmit} class="bg-black mt-8 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Register</button>
      </div>
    </div>
    </div>
  )
}

export default Register;

