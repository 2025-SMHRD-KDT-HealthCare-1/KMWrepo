import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>Home Page 입니다</h1>
       <a href="/about">about 이동</a>
       <br></br>
       <Link to = "/about">about 이동 Link</Link>
    </div>
  )
}

export default Home