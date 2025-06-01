import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'

const Signup = () => {
    const {createUser}=use(AuthContext)

    const handleSignup =(e) => { 
        e.preventDefault()
   
const formData=new FormData(e.target);
  
    const {email,password,...rest}= Object.fromEntries(formData.entries())
    
       createUser(email,password)
       .then(result=>{
const userProfile={
      email,
      ...rest,
      creationTime:result.user?.metadata?.creationTime,
      lastSignInTime:result.user?.metadata?.lastSignInTime,
    }


        fetch('https://coffee-store-server-eta-indol.vercel.app/users',{
method:'POST',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(userProfile)
        }).then(res=>res.json())
        .then(data=>{
        if (data.insertedId) {
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
        }
        })
        
       }).catch(error=>{
        console.log(error)
       })

     }
    
  return (
    <div>
       <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
            <h1 className="text-5xl font-bold">Signup now!</h1>
        <form onSubmit={handleSignup}>
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Signup</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
