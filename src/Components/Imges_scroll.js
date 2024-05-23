import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Imges_scroll = (props) =>{

    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock} = props;

    const[openquickreview,setopenquickreview] = useState(false)


    return(
        <div  className="">
            <div  className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md md:max-w-xl lg:max-w-2xl p-2">
    <div  className="flex items-center">
        <div className="w-1/3">
            <img src={img} alt="" onClick={()=>setopenquickreview(true)} className="w-full h-auto"/>
        </div>
        <div className="w-2/3 p-4">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-lg font-semibold text-gray-700">Price : {price}/-</p>
            <button  onClick={()=>handleadd(name)} className="text-white mt-10 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
 
        </div>
    </div>
    <div className="bg-gray-100 ">
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <p className="text-sm font-medium text-gray-400">Ratings : {ratings}⭐({ratingsCount} reviews)</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Dealer : {seller}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Available : {stock}({stock !== null ?"In stock" : "Out of stock"})</p>
            </div>
        </div>
    </div>
    {
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }
</div>
        
        </div>
        
    )
}

export default Imges_scroll