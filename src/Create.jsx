import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Create = () => {
const [title, setTitle]= useState('')
const [body, setBody]= useState('')
const [author, setAuthor]= useState('Lizzy')
const [isloading, setIsLoading]= useState(false)
const navigate = useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()
  const blog= {title,body,author};

  setIsLoading(true)

  //gör en post request
  fetch('http://localhost:8000/blogs', {
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(blog)
  }).then(()=>{
    console.log('New blog addded');
    setIsLoading(false)
  })
    navigate('/')
}

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
         />
         <label>Blog body</label>
         <textarea
         required
         value={body}
         onChange={(e)=>setBody(e.target.value)}
         ></textarea>
         <label>Blog Author</label>
         <select
         value={author}
         onChange={(e)=>setAuthor(e.target.value)}>
          <option value="Lizzy">Lizzy</option>
          <option value="Chris">Chris</option>
         </select>
        { !isloading && <button>Add Blog</button>}
        { isloading && <button>Adding Blog...</button>}
      
      </form>
    </div>
  )
}

export default Create