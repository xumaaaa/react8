import React from 'react'
import './Hero.scss'

const Hero = ({num}) => {
  return (
<section className={`hero hero${num}`} id={`hero${num}`}>
    <div className="container">
        <div className="hero__wrapper">
          <h1>HERO 1</h1>

        </div>
    </div>
</section>  )
}

export default Hero