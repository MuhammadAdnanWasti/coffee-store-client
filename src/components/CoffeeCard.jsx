import React from 'react'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {photo, name, price, chef, _id}=coffee

    const handleDelete= (_id) => { 
Swal.fire({
  title: "DO you really want to delete?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`https://coffee-store-server-eta-indol.vercel.app/coffees/${_id}`,{
method:'DELETE'
    }).then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingCoffees=coffees.filter(cof=> cof._id!==_id)
    setCoffees(remainingCoffees)
        }
    })
    
  }
});
     }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border-2">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <h2 className="card-title">Chef:{chef}</h2>
    <h2 className="card-title">Price:{price}</h2>
  
    <div className="card-actions justify-end">
     <div className="join join-vertical space-y-2">
<Link to={`coffee/${_id}`}>
  <button className="btn join-item">View</button>
</Link>
<Link to={`updateCoffee/${_id}`}>
  <button className="btn join-item">Update</button>
</Link>
  

  <button className="btn join-item" onClick={()=>{handleDelete(_id)}}>X</button>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CoffeeCard
