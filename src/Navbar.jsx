import React from 'react'

const Navbar = () => {
  return (
   <nav className="navbar">
    <h1>The blog</h1>
    <div>
      <a href="/">Home</a>
      <a href="/create">New Blog</a>
    </div>
   </nav>
  )
}

export default Navbar