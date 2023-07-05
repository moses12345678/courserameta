import React from "react";
import { Link, Redirect } from "react-router-dom";
import Restaurant from '../images/icons_assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hero(){
    const navigate = useNavigate();

    const handleReserve=()=>{
        navigate('/booking')
    }
    const handleHome=()=>{
        navigate('/home')
    }
    return (
        <>
        <section role="banner">
            <div className="section1">
            <h1 style={{color:'#F4CE14'}}>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's <br />
                standard dummy text ever since the 1500s, when an<br /> 
                unknown printer took a galley of<br /> 
                type and scrambled it to make a<br /> 
                type specimen book</p>
            <button onClick={handleReserve}
                style={{
                    backgroundColor: '#F4CE14',
                    color: 'black',
                    borderRadius: '16px'
                }}
            >Reserve a table</button>
            </div>
            <div className="section2">
              <img src={Restaurant} alt="Hero image"
              onClick={handleHome}
              style={{
                cursor:'pointer'
              }}
               />
            </div>
        </section>
        </>
    )
}