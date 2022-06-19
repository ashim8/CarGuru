import { useEffect, useState } from "react"
const useCar = () =>{
    const [aCars, setACar] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setACar(data));
    },[])
    return [aCars, setACar];
}

export default useCar;

