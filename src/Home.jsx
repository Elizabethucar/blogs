import React, { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
const [blogs, setBlogs]= useState([

{title: 'My new website', body: 'loremipsum ...', author:'Lizzy', id: 1},
{title: 'My shop', body: 'loremipsum ...', author:'Mary', id: 2},
{title: 'My party', body: 'loremipsum ...', author:'Chris', id: 3},
{title: 'My shop', body: 'loremipsum ...', author:'Gab', id: 4}
])


//skapar ny array som filtreras och sparas i newBlogs, raderar en i taget genom id
const handleDelete = (id) =>{
const newBlogs = blogs.filter(blog => blog.id !== id)
setBlogs(newBlogs)
}

//mappar/visar igenom alla bloggar, med key property
//lägg in vilka props du vill skicka till förälder i <BlogList/> som är child
//filter tar bort alla bloggar som inte är Lizzy
  return (
    <div className='home'>
      <BlogList  blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
      <BlogList  blogs={blogs.filter((blog)=> blog.author === 'Lizzy')} title='Lizzys Blogs!'/>
    </div>
  )
}

export default Home