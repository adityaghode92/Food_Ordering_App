import { CDN_LINK } from "../utils/constant.js";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
         <div key={item?.card?.info?.id} className=' border-t-2 m-2  p-5 flex border-gray-600 text-left'> 
          <div className="w-9/12">
          <div className="font-semibold  ">
                    <span>{item?.card?.info?.name}</span><br/>
                    <span>₹{(item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100 )}</span>
                </div>
          
             <p className='text-xs my-5'>{item?.card?.info?.description}</p>

            </div>
            <div className=' relative mx-4 flex justify-center place-items-end'>
            <div className=" flex py-5 justify-center">

            <img  src={CDN_LINK+item?.card?.info?.imageId} className= "w-[190px] h-[120px] rounded-lg shadow-lg object-cover "></img>
            <button className=' absolute py-1 px-4 rounded-md bg-white hover:scale-105 shadow-lg font-bold bottom-1 '
                    
                    
                
                >Add +</button>
            </div>

</div>  
</div>

      ))}
    </div>
  );
};
export default ItemList;



