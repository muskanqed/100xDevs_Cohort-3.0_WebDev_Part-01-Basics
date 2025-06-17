import { useEffect } from "react";
import { useState } from "react"


export const usePosts = () => {
  const [data, setData] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    setData(data);
  }

  useEffect(()=>{
      getPosts();
  },[])
  return data;

}