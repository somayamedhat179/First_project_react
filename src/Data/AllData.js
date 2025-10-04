import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
const apiValue = createContext();


function AllData({children}) {
    const [api,setApi] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((element) => {
            setApi(element.data.products);
        })
    },[]);

  return (
    <apiValue.Provider value={api}>
        {children}
    </apiValue.Provider>
  )
}

export {AllData,apiValue};