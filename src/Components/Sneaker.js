import React, { useEffect } from 'react';
import '../Card.css';
import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Sneaker = (props) => {

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock,ress} = props;
   const[openquickreview,setopenquickreview] = useState(false)
   const[isMobile,setisMobile] = useState(false)

    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    useEffect(()=>{
        checkmobile()
    })

    window.addEventListener('resize',()=>{
        checkmobile()
    })

   const checkmobile = () =>{
        if(window.innerWidth < 600){
            setisMobile(true)
        }
        else{
            setisMobile(false)
        }
    }

  return (
    <div className="">
        

<div  className={` ${isMobile ?'w-full text-center':'w-10/12 max-w-sm'}  bg-white border border-transparent rounded-lg shadow `}>
    <p>
        <img onClick={()=>setopenquickreview(true)} className="p-8 rounded-t-lg" src={img} alt="product image" />
    </p>
    <div className="px-5 pb-5">
        <p>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{name.substring(0,19)}{name.length > 20 ? "...":""}</h5>
        </p>
        <div className="flex items-start flex-col mt-2.5 mb-5">
        <div className='flex '>
                <span className="text-md  font-bold text-gray-900 ">Price : {price}/-</span>
            </div>
            <div className="p-4 mt-2 bg-gray-50  rounded-lg shadow-md">
                {/* <p className="text-sm font-semibold text-gray-900 dark:text-white">Seller : {seller}</p> */}
                <p className="text-sm font-bold text-gray-700 ">Available : {stock} ({stock !== null ?"In stock" : "Out of stock"})</p>
                <p className="text-sm font-bold text-blue-500 ">Shipping in {shipping} days</p>
            </div>
            <span className=" text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded mt-2  ">Ratings : {ratings}⭐({ratingsCount} reviews)</span>

        </div>

        <div className="flex items-center justify-between">
            
            <p onClick={()=>handleadd(name)} className="text-white  bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</p>
        </div>

    </div>
</div>

{
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }


    </div>
  );
};

export default Sneaker;
