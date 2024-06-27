import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from "../components/CartItem"; 

function Cart() {

  const {cart} = useSelector( (state) => state);
  console.log("printing cart")
  console.log(cart)
  const  [totleAmount , setTotleAmount] = useState(0);

  useEffect( () => {
    setTotleAmount( cart.reduce( (acc, curr) => acc + curr.price , 0));

  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
         (<div className=' flex flex-row justify-center scroll-smooth '>
             <div>
                {
                  cart.map((item,index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                  })
                }
             </div>
             <div className=' flex flex-col justify-between mt-6 pl-20'>
                <div>
                  <div className=' text-green-700 text-xl font-semibold'>Your Cart</div>
                  <div className=' text-green-700 text-3xl font-bold uppercase'>Summary</div>
                  <p>
                    <span className=' text-gray-900 text-xl font-semibold'>Total Item: {cart.length}</span>
                  </p>
                </div>
                <div className=' flex flex-col gap-y-2 mb-20'>
                  <div className=' flex gap-2'>
                    <p className=' text-gray-700 font-semibold '>Total Amount:</p>
                    <p className=' text-black font-bold '>${totleAmount}</p>
                  </div>
                  
                  <button className=' h-10 w-[230px] bg-green-600 text-white rounded-md font-semibold'>
                    Check out Now
                  </button>
                </div>
               

             </div>
          </div>) : 
         (<div className=' flex flex-col justify-center items-center mt-[10%] gap-y-3'>
          <h1 className=' text-green-600 font-semibold text-xl'>Cart Is Empty</h1>
          <Link to="/" >
            <button className=' h-10 w-[230px] bg-green-600 text-white rounded-md font-bold'>
              Shop Now
            </button>
          </Link>
          </div>)
      }
    </div>
  )
}

export default Cart