import React, { useState , useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
const [blogs, setBlogs]= useState(null)
const [isloading, setIsLoading]= useState(true)
const [error, setError]= useState(null)


//skapar ny array som filtreras och sparas i newBlogs, raderar en i taget genom id


//hämtar data från jsonserver
useEffect(()=>{
fetch('http://localhost:8000/blogs')
.then(res => {
  if(!res.ok){
  throw Error('could not fetch')
  }
  return res.json()
})
.then((data)=>{
  setBlogs(data)
  setIsLoading(false)
  setError(null)
})
.catch(err =>{
  setIsLoading(false)
  setError(err.message)
})
},[])

//mappar/visar igenom alla bloggar, med key property
//lägg in vilka props du vill skicka till förälder i <BlogList/> som är child
//filter tar bort alla bloggar som inte är Lizzy
//{blogs && visar det som är sant , och här är blogs null}
  return (
    <div className='home'>
      {error &&  <div>{error}</div>}
      {isloading &&  <div>Loading...</div>}
      {blogs && <BlogList  blogs={blogs} title='All Blogs!' />}
      {blogs && <BlogList  blogs={blogs.filter((blog)=> blog.author === 'Lizzy')} title='Lizzys Blogs!'/>}
       
    </div>
  )
}

export default Home