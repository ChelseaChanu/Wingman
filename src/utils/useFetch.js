import { useEffect, useState } from "react";

const useFetch = (url)=>{
  const [dbData, setDbData] = useState(null);
  const fetchData = async (endpoint)=>{
    const response = await fetch(`${url}`);
    const data = await response?.json();
    setDbData(data);
  };

  useEffect(()=>{
    fetchData(url);
  },[url]);

  return {dbData};
}

export default useFetch;