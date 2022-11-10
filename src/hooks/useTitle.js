import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Brad's Law`;
    },[title])
};

export default useTitle;