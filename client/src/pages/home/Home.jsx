import React from 'react'
import Card from '../../components/card/Card'
import posts from '../../static/dummy_data'
// import { posts } from '../../static/dummy_data'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        {posts.map((post) => (
            <Card post={post} key={post.id} />
        ))}
    </div>
  )
}

export default Home