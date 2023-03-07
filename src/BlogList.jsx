import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title}) => {
  //hämtar props från förälder
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(props.blogs)

  //tar in title utanför map
  //handleDelete functionen finns i child komponenten
  //Link länkar till specifik blogg genom id
  return (
   <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map((blog)=>(
    <div className="blog-preview" key={blog.id}>
    <Link to={`/blogs/${blog.id}`}>
    <h2>{blog.title}</h2>
    <p>Written by { blog.author}</p>
    </Link>
    </div>
    ))}
   </div>
  )
}

export default BlogList