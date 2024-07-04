import Mockdata from "../Utils/Mockdata.json"
import Sneaker from "./Sneaker";
import { useEffect, useState } from "react";

const Snekaer_control = () =>{

    const[isMobile,setisMobile] = useState(false)


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

    const groupcards = Mockdata?.maindata;
    // console.log(groupcards.cards)
    // stock
    return(
        <div className="mt-7 ml-5 mr-5">
            
            <hr />
        <h2 className="text-3xl font-bold text-gray-600  border-b-2 border-gray-300  pb-2 mb-4 mt-1">Recommended for you</h2>

        <div className={`grid ${isMobile?'':'ml-12'} grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center  p-4 rounded-2xl`}>

            {
              groupcards.cards.filter((res) => res.category === "Men's Sneaker" ).map((res)=><Sneaker ress={res}  name={res.name} ratings={res.ratings} price={res.price}  ratingsCount={res.ratingsCount} img={res.img} category={res.category} seller={res.seller} shipping={res.shipping} stock={res.stock}/> )  
            }
        </div>
        </div>
    )
}

export default Snekaer_control;