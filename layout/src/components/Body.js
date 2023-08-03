import React, { useEffect, useRef } from 'react';
import logo1 from '../images/Aftershave Balm.jpg';
import logo2 from '../images/Deodorant Stick.jpg';
import logo3 from '../images/Dior Homme.jpg';
import logo4 from '../images/elixir.jpg';
import logo5 from '../images/abc.jpg';
import videoFile from '../images/Travis_Scott.mp4';
import videoFile1 from '../images/robin.mp4';
import videoFile2 from '../images/robin_dior.mp4';
import trav1 from '../images/trav1.jpg';
import trav2 from '../images/trav2.jpg';
import logo from '../images/sauvage.jpg';
import logo6 from '../images/air_dior.png';

export default function Body(){
    const handleClick = () => {
        window.location.href = 'https://www.dior.com/en_us/fashion/news-fashion-shows/folder-news-and-events/air-dior-behind-the-scenes';
      };

    const handleClick1 = () => {
        window.location.href = 'http://localhost:3000/';
      };
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);
    
    return (
        <body className='body_section'>
            <div className='title_div'>
                <h1 className='body_main_title'>DIOR HOMME</h1>
            </div>
            <div className='image_div'>
                <img src= {logo1} alt="" className='body_image1'/> 
                <p>Dior Homme <br/>
                   Spray Deodorant</p>
                <p className='price'>$35.00</p> 
            </div>
            <div className='image_div'>
                <img src= {logo2} alt="" className='body_image1'/>
                <p>Dior Homme <br/>
                   Aftershave Balm</p>
                <p className='price'>$70.00</p> 
            </div>
            <div className='image_div'>
                <img src= {logo3} alt="" className='body_image1'/>
                <p>Dior Homme <br/>
                   Eau de Toilette</p>
                <p className='price'>From $95.00 - Spray 1.7 oz</p> 
            </div>
            <div className='sauvage_img'>
                <img src= {logo} alt="" className='the_sauvage'/> 
            </div>
            <div className='sauvage_div'>
                <h1 className='sauvage_title'>"SAUVAGE"</h1>
                <p className='sauvage_quote'>Sauvage is an act of creation inspired by wide-open spaces. <br/>
                A composition marked by a raw freshness, powerful and noble all at once.</p>
                <div className='sauvage_prod'>
                <img src= {logo4} alt="" className='sauvage_image'/>
                <p>Sauvage Elixir <br/>
                   Elixir - Spicy, Fresh and Woody Notes</p>
                <p className='price'>From $180.00 - Spray 2.0 oz</p> 
                </div>
                <div className='sauvage_prod'>
                <img src= {logo5} alt="" className='sauvage_image'/>
                <p>Sauvage Moisturizer for Face and Beard <br/>
                   Face and Beard Moisturizer - Hydrates and Refreshes</p>
                <p className='price'>$70.00</p> 
                </div>
            </div>
            <div className='Footer'>
                <div className="video-container">
                    <video className="video-element" ref={videoRef} autoPlay muted loop>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <button className="button" onClick={handleClick}>ABOUT AIR DIOR</button>
                    </div>
                </div>
            </div>
            <div className='travis'>
                <img src= {trav1} alt="" className='the_scott'/> 
            </div>
            <div className='travis'>
                <img src= {trav2} alt="" className='the_scott'/> 
            </div>
            <div className='air_dior'>
                <img src= {logo6} alt="" className='air_logo'/>
                <h1 className='air_quote'>DIOR X TRAVIS SCOTT</h1>
                <p className='air_talk'>Made in Italy entirely of Dior-approved leather, the shoe was designed to be, in Jones’ own words, the “most luxurious Air Jordan 1 ever.” <br/>
                Celebrating the sneaker's 35th Anniversary, the collaboration was an attempt to bridge the world’s of high-fashion and street culture, and create a silhouette that embodied both. </p>
            </div>
            <div className='im_your_man'>
                <div className="video-container">
                    <video className="video-element1" autoPlay muted loop>
                        <source src={videoFile2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay1">
                        <button className="button1" onClick={handleClick1}>SHOP DIOR NOW</button>
                    </div>
                </div>
            </div>
            <div className='Final'>
                <p>A product by</p>
                <h1>BAO ELIE TRAN</h1>
            </div>
        </body>
    );
}


