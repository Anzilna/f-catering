import React from 'react';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';

import harvestImage from './images/catering-Photoroom.png-Photoroom.png'; // Import the image for Harvest catering
import './home.css'; 

export const Uhome = () => {
  return (
    <div >
      <UserNavbar />
      <div className='' >
        <div className='image-container'>
        <img src={harvestImage} alt="Harvest Catering" className="img"  />
        </div>
        <p className='paragraph'>We are delighted to offer a variety of catering packages tailored to meet your event needs. <br />
        Our Gold package represents the pinnacle of elegance and sophistication, designed for grand celebrations and corporate events. <br />
        The Silver package offers a balanced combination of quality and affordability, <br />
        making it perfect for medium-sized gatherings and social occasions. <br /> For those seeking the utmost in luxury and personalized service, <br />our Platinum package promises an unforgettable experience, 
        tailored to exclusive events and VIP gatherings.<br />
         Each package is meticulously crafted to exceed your expectations, <br />
         ensuring that your event is a memorable culinary journey for you and your guests.</p>
        <div className='htext'> 
        <h1 >Harvest Catering</h1>
          <div >
        <h1 className='heading'>Our services</h1>
        </div>
       
        </div>
        <Link to="/order">
          <button className="green-button ">Book your Order</button>
        </Link>
      </div>
    </div>
  );
};
