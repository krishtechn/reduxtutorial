import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carosels from './Carosels';
import data from './carddata';
import image1 from "../Components/image/home2.gif";
import image3 from "../Components/image/home1.jpg";
import image2 from "../Components/image/home1.jpg";

const Imageslider = () => {
 const [width,setwidth] = useState(window.innerWidth);

 const checksize = () => {
  setwidth(window.innerWidth);
};

 useEffect(()=>{
  window.addEventListener("resize", checksize);
 })

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: width < 846?1:3,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div>
<Carosels image1={image1} image2={image2} image3={image3}/>
<div className="container mt-5">

      <div className="row d-flex justify-content-center " style={{margin:"0 auto"}}>


      <Slider {...settings}>
          
{data.map((items)=>{
  return (
    <div className="col d-flex justify-content-center">

  <div className="cards rounded" style={{width: "21rem",backgroundColor:"white",textAlign:"left",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}}>
  <img src={items.image} className="card-img-top " alt="..." />
  <div className="card-body">
  <h5 className="card-title text-align-left">{items.title}</h5>
  <p className="card-text">{items.desc}</p>
  <a href="#" className="btn btn-primary">{items.btn}</a>
  </div>
  </div>
</div>
  )
  
})}

        </Slider>

        </div>  
</div>

</div>
  )
}

export default Imageslider