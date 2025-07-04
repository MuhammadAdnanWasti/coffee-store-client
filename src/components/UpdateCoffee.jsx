import React from 'react'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const {photo, name, price,_id, chef,taste,details,supplier }=useLoaderData()
  const handleUpdateCoffee=(e) => { 
    e.preventDefault()
const formData= new FormData(e.target)
const updatedCoffee=Object.fromEntries(formData.entries())


  fetch(`https://coffee-store-server-eta-indol.vercel.app/coffees/${_id}`,{
method:'PUT',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(updatedCoffee)
    }).then(res=>res.json())
    .then(data=>{
if (data.
modifiedCount) {
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Coffee updated Successfully",
  showConfirmButton: false,
  timer: 1500
});
}
    })
  }
  return (
    <div className='p-24'>
      <div className='p-12 text-center'>
        <h1 className="text-6xl ">Update Coffee</h1>
     

      </div>
      <form onSubmit={handleUpdateCoffee} >
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Name</label>
            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee name" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Chef</label>
            <input type="text" name='chef' defaultValue={chef} className="input w-full" placeholder="Chef name" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Supplier</label>
            <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Suplier name" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Taste</label>
            <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste name" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Price</label>
            <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price name" />

          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Details</label>
            <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details name" />

          </fieldset>
         
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">


            <label className="label">Photo</label>
            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />

          </fieldset>
          <input type="submit" value="Update Coffee"  className='btn w-full my-3'/>
      </form>
    </div>
  )
}

export default UpdateCoffee
