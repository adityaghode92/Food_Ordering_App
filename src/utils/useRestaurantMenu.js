import { useEffect , useState} from "react";
import { MENU_API } from "../utils/constant";


const useRestaurantMenu = (resId)=>{
    
    const [ResInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])
``
    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return ResInfo;
}


export default useRestaurantMenu;
