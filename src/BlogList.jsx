import React from 'react'

const BlogList = ({blogs, title}) => {
  //håmtar props från förälder
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(props.blogs)

  //tar in title utanför map
  //handleDelete functionen finns i child komponenten
  return (
   <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map((blog)=>(
    <div className="blog-preview" key={blog.id}>
    <h2>{blog.title}</h2>
    <p>Written by { blog.author}</p>
   
    </div>

    ))}
   </div>
  )
}

export default BlogList