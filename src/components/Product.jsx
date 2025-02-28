import React from "react";
import { Star } from "../assets/Star";


const Product = ({ data }) => {
    // console.log(data);  
    const average = 4.1;
    return <>
        <div className="p-4 flex gap-4 flex-col items-center justify-center h-80 w-64 bg-gray-200 rounded-lg">
            {/* Product Image */}
            <img src={data.image} alt={data.name} className=" h-28  object-cover" />
            {/* Product Name */}
            <div className="text-lg font-bold text-gray-700">
                {data.name}
            </div>
            
            <div className="flex w-full justify-between ">
{   data.rating &&
                <div className="flex items-center justify-center ">
                    <Rating rating={data.rating} key={data.id} />
                </div>}
                <div className="mt-2 text-center text-2xl font-semibold text-gray-700 font-serif">
                    {data.price}
                </div>
                
            </div>
            <div className="w-full">
                <button className="cursor-pointer bg-orange-600 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                    Add to Cart 
                </button>
            </div>
        </div>
    </>
};

const Rating = ({ rating }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center">   
                {[...Array(5)].map((_, i) => {
                    const starValue = i + 1; 
            
                    return <Star key={i}
                    className= {`h-3.5 mr-0.5 text-orange-500 ${starValue <= Math.round(rating.average) ? "fill-orange-500" : "fill-transparent"} `}
                    />
                })} 
                <span className="text-gray-700">
                    ({rating.average?.toFixed(1)})
                </span>
            </div>
            <div className="text-gray-700 "> 
                {rating.reviews} reviews
            </div>
        </div>
    )
}

export default Product;
