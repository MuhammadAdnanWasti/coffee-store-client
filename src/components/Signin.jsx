import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'

const Signin = () => {

  const {signInUser}=use(AuthContext)
   const handleSignin =(e) => { 
        e.preventDefault()
   
const formData=new FormData(e.target);
  
    const {email,password}= Object.fromEntries(formData.entries())

    signInUser(email,password)
    .then(result=>{
      console.log(result)

      const siginInInfo={
        email,
        lastSignInTime:result.user?.metadata?.lastSignInTime
      }

          fetch('https://coffee-store-server-eta-indol.vercel.app/users',{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(siginInInfo)
              }).then(res=>res.json())  
              .then(data=>{
             console.log(data)
              })

     
    }).then(error=>{
      console.log(error)
    })
   }
  return (
     <div>
       <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
            <h1 className="text-5xl font-bold">Signin now!</h1>
        <form onSubmit={handleSignin}>
         
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
           <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Signin</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signin
