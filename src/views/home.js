import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Closed Github</title>
        <meta property="og:title" content="Closed Github" />
      </Helmet>
      <Link to="/" className="home-navlink">
        <div className="home-container1"></div>
      </Link>
      <button className="button">Button</button>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
