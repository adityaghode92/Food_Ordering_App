import React from "react";
import { CDN_LINK } from "../utils/constant";

const Carousel = ({carousel,setfilterResList}) => {

    
    return (
        <div >
            <div className="flex overflow-x-auto scrollbar-hide  dark:mix-blend-exclusion shadow-sm">
                {carousel.map((item)=><img key={item.id} className="w-40 cursor-pointer" src={CDN_LINK+item.imageId}/>)}
            </div>
        </div>
    )
    }


export default Carousel;    