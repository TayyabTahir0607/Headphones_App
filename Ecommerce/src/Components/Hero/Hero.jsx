import React from 'react'
import hero_img from '../../assets/Headphone-3.webp'
import './Hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero_sec">
        <div className="left_hero">
            <div className="hero_title">
            Noise cancelling headphones
            </div>
            <div className="hero_desc">
            Immerse yourself in high-fidelity sound with these over-ear headphones, designed to deliver deep bass and clear treble. With plush ear cushions and an adjustable headband, comfort meets performance for long listening sessions.
            </div>
            <Link to='/Products'>
            <div className="hero_button">
                <button>Shop the collection</button>
            </div>
            </Link>
        </div>
        <div className="right_hero">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero