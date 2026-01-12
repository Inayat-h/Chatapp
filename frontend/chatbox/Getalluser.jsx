import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import cookies from "js-cookie";

function Getalluser() {
 
    const[getuser,setgetuser]=useState([]);
    const[loading,setloading]=useState(false);
    useEffect(()=>{
        
      
      
        const getuser=async()=>{
            setloading(true);
            try{
            const token=cookies.get("jwt");
            const response=await axios.get("/api/user/getuser",
                {
                    Credentials:"include",
                    headers:{
                        Authorization:`bearer${token}`,
                    }
                }
            );
            setgetuser(response.data);
            setloading(false);
        }
       catch(error){
        console.log("error in getuser"+error);
       }
    }
    getuser()
    },[]);
    return [getuser,loading]
}

export default Getalluser