import Electronics from "./Electronics";
import Mockdata from "../Utils/Mockdata.json"
const ElectronicsController = () => {

    const electronicard = Mockdata?.maindata;

    return(
        <div className="mt-20 ml-5 mr-5">
            <hr />
        <h2 className="text-3xl text-center font-bold text-green-500   border-b-2 border-gray-300  pb-2 mb-4">Electronics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-5xl place-items-center gap-7 mt-10 bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-5 ">
            {
                    electronicard.cards
                    .filter((res) => res.category === "Earphones")
                    .map((res, index) => (
                        <div key={index} className="inline-block">
                            <Electronics
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

export default ElectronicsController;