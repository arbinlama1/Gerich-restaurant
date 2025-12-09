import React from 'react'
import './Chef.css';
import { images } from '../../constrant';
import { SubHeading } from '../../component';
const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="" />
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className="p__opensans">Actor Sit laculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consquat. Aliquam Moiestie Lectus Eu. Congue Laculis integer Curabitur Semper Sit Nunc.</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef;
