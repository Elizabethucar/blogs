import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import useFetch from './UseFetch'

const BlogDetails = () => {
const {id}= useParams()
const {data: blog, error, isloading}= useFetch('http://localhost:8000/blogs/' + id);
const navigate= useNavigate()

//delete function
const handleClick =()=> {
  fetch('http://localhost:8000/blogs/' + blog.id, {
   method: 'DELETE'
  }).then(()=>{
    navigate('/')
  })
  
}

//hämtar blog till id sidan
  return (
    <div className='blog-details'>
      {isloading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
        </article>
        )}
    </div>
  )
}

export default BlogDetails