import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const {cart} = useSelector((state) => state);


  return (
    <div >
      <nav className='w-full max-w-6xl mx-auto h-[60px] flex flex-row justify-around items-center '>
      
        <NavLink to="/">
          <div className=' w-[90px]   '>
            <img src='./logo.jpeg' alt='logo'/>
          </div>  
        </NavLink>

        <div className=' flex font-bold text-slate-100  flex-row items-center mr-5 space-x-5 '>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/Cart">
            <div className=' relative'>
              <FaShoppingCart className=' text-2xl ' />
              {
                cart.length> 0 &&
                <span className=' absolute -top-3 -right-2 bg-green-600 text-xs w-5 h-5 flex rounded-full justify-center items-center animate-bounce'>{cart.length}</span>
              }
             
            </div>
          </NavLink>
          
            
        </div>

      </nav>
    </div>
  )
}

export default Navbar