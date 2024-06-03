import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Bottle = (props) =>{

    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock} = props;

    const[openquickreview,setopenquickreview] = useState(false)


    return(
        <div  className="mt-5 mb-5 ">
            <div  class=" bg-white rounded-md overflow-hidden  md:max-w-lg lg:max-w-xl p-2">
    <div  class="flex items-center">
        <div class="ml-10">
            <img src={img} className="rounded-full max-w-48 hover:cursor-pointer" alt="" onClick={()=>setopenquickreview(true)} />
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

export default Bottle;