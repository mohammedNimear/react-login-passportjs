import React from 'react'
import './post.css'
import { useLocation } from 'react-router-dom'
import posts from '../../static/dummy_data'

const Post = () => {

  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const post = posts.find(post => post.id === +path)
  return (
    <div className='post'>
        <img src={post.img} alt="postImg" />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}

export default Post