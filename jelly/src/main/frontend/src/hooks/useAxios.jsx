import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({ url, method, body = null, headers = null, render })=>{
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = ()=>{
        axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((res)=>{
            setResponse(res.data);
        }).catch((err)=>{
            setError(err);
        }).finally(()=>{
            setloading(false);
        })
    }

    useEffect(()=>{
        fetchData();
    },[method, url, body, headers, render]);

    return { response, error, loading };
}

export default useAxios;