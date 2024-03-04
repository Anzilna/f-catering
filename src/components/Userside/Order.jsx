import axios from 'axios';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../Api';
import { useNavigate } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import './order.css';

const Order = () => {
    const [ptype, setPtype] = useState([]);

    useEffect(() => {
        console.log("djfhjs");
        axios.get(baseUrl + "/ptview")
            .then(response => {
                console.log(response.data);
                setPtype(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value);
        navigate(`/address/${value}`);
    };

    return (
        <div>
            <UserNavbar></UserNavbar>
        <div className='card' >
            {ptype.map((ptypeItem, index) => (
                   
                    <div key={index}  >
                   
                    <img className='card-image' src={`data:image/jpeg;base64,${Buffer.from(ptypeItem.image.data).toString('base64')}`} alt="Card Image"  />
                  <div className='card-content'>
                 
                        <h3 className='card-header'>{ptypeItem.packname}</h3>
                        <p><strong>Package ID:</strong> {ptypeItem.packid}</p>
                        <p><strong>Price:</strong> {ptypeItem.pprice}</p>
                        <p><strong>Description:</strong> {ptypeItem.pdescription}</p>
                    </div>
                    <button className='card-button'onClick={() => handleSubmit(ptypeItem._id)}>Buy Now</button>
                </div>
            ))}
        </div>
        </div>
            );
};

export default Order;
