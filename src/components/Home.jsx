import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard'

const Home = () => {
  const initialCoffees= useLoaderData()
  const [coffees, setCoffees]=useState(initialCoffees)
  return (
    <div>
      <div className='grid mx-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 gap-3'>
        {
          coffees.map((coffee)=> <CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees} setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default Home
