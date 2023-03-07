import {  useState,useEffect } from "react"

//custom hook som är återanvändbar, url ist för api
const useFetch = (url)=>{
const [data, setData]= useState(null)
const [isloading, setIsLoading]= useState(true)
const [error, setError]= useState(null)

  //hämtar data från jsonserver
useEffect(()=>{
  fetch(url)
  .then(res => {
    if(!res.ok){
    throw Error('could not fetch')
    }
    return res.json()
  })
  .then((data)=>{
    setData(data)
    setIsLoading(false)
    setError(null)
  })
  .catch(err =>{
    setIsLoading(false)
    setError(err.message)
  })
  },[url])

  return {data, isloading, error}
}


export default useFetch