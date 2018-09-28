import React from "react"
import '../styles/main.css'
import '../styles/queries.css'
import Nav from '../components/nav.js'
import image1 from '../assets/photography/portriat-1.jpg'
import image2 from '../assets/photography/portriat-2.jpg'
import image3 from '../assets/photography/portriat-3.jpg'
import image4 from '../assets/photography/portriat-4.jpg'
import image5 from '../assets/photography/portriat-5.jpg'
import image6 from '../assets/photography/portriat-6.jpg'
import image7 from '../assets/photography/portriat-7.jpg'
import image8 from '../assets/photography/portriat-8.jpg'
import image9 from '../assets/photography/portriat-9.jpg'
import image10 from '../assets/photography/portriat-10.jpg'
import image11 from '../assets/photography/portriat-11.jpg'
import image12 from '../assets/photography/portriat-12.jpg'
import image13 from '../assets/photography/portriat-13.jpg'
import image14 from '../assets/photography/portriat-14.jpg'
import image15 from '../assets/photography/portriat-15.jpg'
import image16 from '../assets/photography/portriat-16.jpg'
import image17 from '../assets/photography/portriat-17.jpg'
import image18 from '../assets/photography/portriat-18.jpg'



export default () => 
<div>
  <header>
    <Nav />
  </header>
  <div className="non-flex-container">
    <div>
      <img src={image2} className="photo" />
      <img src={image1} className="photo" />
      <img src={image3} className="photo" />

    </div>

    <div>
      <img src={image8} className="photo" />
      <img src={image7} className="photo" />
      <img src={image9} className="photo" />
    </div>


    <div>
      <img src={image4} className="photo" />
      <img src={image5} className="photo" />
      <img src={image6} className="photo" />
    </div>

    <div>
      <img src={image14} className="photo" />
      <img src={image13} className="photo" />
      <img src={image15} className="photo" />
    </div>

    <div>
      <img src={image10} className="photo" />
      <img src={image16} className="photo" />
      <img src={image11} className="photo" />
    </div>

    <div>
      <img src={image17} className="photo" />
      <img src={image12} className="photo" />
      <img src={image18} className="photo" />
    </div>
  </div>
</div>