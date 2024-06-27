import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';


function CartItem({item, itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart= () =>{
     dispatch(remove(item.id));
     toast.error("Item Removed")
  }
  return (
    <div>
      <div className=' flex flex-row gap-x-10 w-[500px] py-4  p-3 '>
        <div className=' h-[200px] w-[160px]'>
          <img src={item.image}  className=' w-full h-full' alt='Product img' />
        </div>

        <div className=' flex flex-col gap-y-3 w-[280px]'>
          <h1 className=' text-gray-700 font-semibold text-lg text-left truncate '>{item.title}</h1>

          <p className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>

          <div className=' flex justify-between gap-x-16 items-center  w-full'>
            <p className=' font-bold text-green-600'>${item.price}</p>
            <div onClick={removeFromCart}
            className=' flex bg-red-500 rounded-full h-[25px] w-[25px] justify-center items-center cursor-pointer'>
              <MdDelete
                />
            </div>

          </div>
        
        </div>
      </div>
      
      <div className=' h-[1.5px] bg-gray-900 m-1'  > </div>
      


    </div>
  )
}

export default CartItem