import React from 'react'
import { useSelector } from 'react-redux'
import Quickreview from './Quickreview'
import Showcart from './Showcart';
import { useDispatch } from 'react-redux';
import { removeItem,clearCart} from '../Utils/CartSlice';
import truck from '../Utils/truck.mp4';
import truck1 from '../Utils/truck-unscreen.gif'

const Cart =()=> {


  const dispatch = useDispatch();

    const cartitems = useSelector((store)=>store.cart.items)
    console.log(cartitems);
    

    const handleremove = () =>{
      dispatch(removeItem());
    }
    
    const handleclear = () =>{
      dispatch(clearCart());
    }

  return (
    <div className='h-screen mt-28   bg-white'>
      <hr className='h-2 '/>
      <p className='text-center  text-3xl m-10 text-gray-600 font-bold'>Cart</p>
      {cartitems.length === 0 ? (<>
      <div className='flex justify-center  w-full bg-slate-50'>
          <p className='text-center text-blue-500 text-2xl m-10  font-bold'>The Cart is <span className='text-red-400'>Empty!!!</span>  ,<br /> Go on Shopping...</p>

          <video className='w-16 bg-blend-color-burn' loop autoPlay  src={truck}></video>
      </div>
                
                </>
            ) : (
                cartitems.map((items) => <Showcart items={items} />)
            )}
            {
              cartitems.length !== 0 ? <div className='flex justify-center items-center flex-col'>
              <p onClick={handleremove} class="text-white mt-5  bg-black hover:cursor-pointer hover:bg-gray-800 w-3/12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Remove Item</p>
              <p onClick={handleclear} class="text-white mt-5 bg-black hover:cursor-pointer hover:bg-gray-800 w-3/12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Clear Cart</p></div>  :""
            }
      

      

    </div>
  )
}

export default Cart
