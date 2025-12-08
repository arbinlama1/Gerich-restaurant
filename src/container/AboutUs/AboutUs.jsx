import React from 'react'
import "./AboutUs.css";
import images from '../../constrant/images';
const AboutUs = () => {
  return (
   <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g latter" />
    </div>
    
    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa soluta, ad corporis nostrum amet eaque doloremque rerum aliquid veritatis voluptatum inventore saepe reprehenderit molestiae pariatur nihil suscipit adipisci error commodi?
        </p>
        <button type='button' className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa soluta, ad corporis nostrum amet eaque doloremque rerum aliquid veritatis voluptatum inventore saepe reprehenderit molestiae pariatur nihil suscipit adipisci error commodi?
        </p>
        <button type='button' className="custom__button">Know More</button>
      </div>
    </div>
   </div>
  )
}

export default AboutUs;
