import Electronics from "./Electronics";
import Mockdata from "../Utils/Mockdata.json";
import Clothes from "./Bottle";
import Bottle from "./Bottle";

const Bottlecontroller = () => {

    const clothcard = Mockdata?.maindata;

    return(
        <div className="mt-24 ml-10 mr-10">
        <hr className="h-px bg-blue-500" />
        <hr className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <h2 className="text-3xl text-center font-bold text-gray-600  border-b-2 border-gray-300  pb-2 mb-4">Newly added</h2>


<div className="overflow-x-auto whitespace-nowrap transition-all duration-1000 ease-in  ">
    {
        clothcard.cards
            .filter((res) => res.category === "Bottle")
            .map((res, index) => (
                <div key={index} className="inline-block">
                    <Bottle
                        name={res.name}
                        ratings={res.ratings}
                        price={res.price}
                        ratingsCount={res.ratingsCount}
                        img={res.img}
                        category={res.category}
                        seller={res.seller}
                        shipping={res.shipping}
                        stock={res.stock}
                    />
                </div>
            ))
    }
    </div>
</div>
    )
}

export default Bottlecontroller;