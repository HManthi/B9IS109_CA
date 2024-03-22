import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1 className='hero-text'>Reader's Haven</h1>
                <p className='hero-description'>
                Discover and buy books online. Wide selection, author info, customer reviews, and fast delivery. Support local bookstores and authors.
                </p>
        </div>
        <div className='hero-image'>

        </div>
    </div>
  )
}

export default Home