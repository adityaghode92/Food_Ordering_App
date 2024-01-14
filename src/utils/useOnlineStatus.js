import { useEffect , useState} from "react"

const UseOnlineStatus = ()=>{

    const [onlineStatus,setonlineStatus] = useState(true);

    useEffect(()=>{
        
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        })

        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        })


    }
    
    ,[])
    


    //boolean value returns
    return onlineStatus;
}

export default UseOnlineStatus;