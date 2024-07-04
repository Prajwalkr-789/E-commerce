import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Boot = (props) =>{

    const {name, ratings, price, ratingsCount, img} = props;

    const[openquickreview,setopenquickreview] = useState(false)

    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    return(
        <div className=" ">
        <div className="">
    <div   class="flex justify-center items-center  ">
        <div class="max-w-xs rounded-lg shadow-lg   p-6 bg-white  bg-gradient-to-br from-gray-50 to-gray-50 bg-opacity-25 ">
            <figure>
                <img onClick={()=>setopenquickreview(true)} src={img} alt="Boots" class="w-full rounded-t-lg"/>
            </figure>

            <div class="p-4 ">
                <h2 class="text-md font-semibold  text-black mb-4 ">{name.substring(0,21)} {name.length > 21 ?"...":""}</h2>

                <div className="flex  lg:flex-row md:flex-col">
                    <p class="text-black mx-auto font-bold mb-4 ">Price : 💲{price}/-</p>
                    <p class="text-blue-400 text-xs font-bold mb-4 w-fit rounded-lg p-1">{ratings}⭐ ({ratingsCount} reviews)</p>

                    {/* <p class="text-black text-md font-bold mb-4 ml-auto">Seller : {seller}</p> */}
                </div>

                {/* <div className="flex flex-row">
                    <p class="text-blue-400 text-xs font-bold mb-4 shadow-sm w-fit rounded-lg p-1">{ratings}⭐ ({ratingsCount} reviews)</p>
                    <p class="text-blue-400 text-sm font-bold mb-4 shadow-sm w-fit rounded-lg p-1 ml-auto">Available : {stock}</p>
                </div> */}

                <div class="flex justify-center">
                <button onClick={()=>handleadd(name)} class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Add to cart
           
        </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    {
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }


        </div>
    )
}

export default Boot;