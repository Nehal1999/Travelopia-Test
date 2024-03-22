import { useState } from "react";

const useFetch = ()=>{
    const [data, setData] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const fetchData = async(url : string ,options: any) =>{
        setLoading(true);
        try{
            const response = await fetch(url,options);
            const data = await response.json();
            setData(data);
        }catch(error : any){
            setError(error.message)
        }finally{
            setLoading(false);
        }
    }

    const getData = async(url : string) =>{
        await fetchData(url,{
            method : 'GET'
        })
    }

    const postData = async(url : string,payload : any) => {
        await fetchData(url,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body :  JSON.stringify(payload)
        })
    }

    return {data,loading,error,getData,postData};
}

export default useFetch;