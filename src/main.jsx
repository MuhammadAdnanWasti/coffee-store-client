import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './context/AuthProvider.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
   children:[
    {index:true, Component:Home,
      loader:()=>fetch('http://localhost:3000/coffees')
    },
    {path:'addCoffee', Component:AddCoffee},
    {path:'coffee/:id', Component:CoffeeDetails,
      loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
    },
    {path:'updateCoffee/:id', Component:UpdateCoffee,
       loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
    },
    {path:'signin', Component:Signin
    },
    {path:'signup', Component:Signup
    },
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
