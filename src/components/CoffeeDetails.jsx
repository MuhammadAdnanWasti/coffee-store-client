import React from 'react'
import { useLoaderData } from 'react-router'

const CoffeeDetails = () => {
     const {photo, name, price,_id, chef,taste,details,supplier }=useLoaderData()
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
    <h2 className="card-title">Taste:{taste}</h2>
    <h2 className="card-title">Details:{details}</h2>
    <h2 className="card-title">Supplier:{supplier}</h2>
  
  
  </div>
</div>
    </div>
  )
}

export default CoffeeDetails
