import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = ({title}) => {
let location = useLocation();
let path;
path = location.pathname.replace("/","");
    console.log(path)
    const [color,setcolor] = useState({
        bgcolor:"black",
        color:"red",
        text:"disable dark mode",
    })
    
  const [money,setmoney] = useState(10000);

    useEffect(()=>{
        document.title = `Technical krish ${path == ""?"Home":path}`;
   
    })

    
    const changecolor = ()=>{
        if(color.bgcolor == "black"){
            setcolor({
              bgcolor:"white",
              color:"black",
              text:"enable dark mode",
            })
        }else{
            setcolor({
                bgcolor:"black",
                color:"red",
                text:"disable dark mode",
              })
        }
  
        document.body.style.backgroundColor = color.bgcolor;
        document.body.style.color = color.color;
       console.log(color.bgcolor)
    }
   



  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${path == ""?"active bg-primary":""}`}>
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className={`nav-item ${path == "About"?"active bg-danger":""}`}>
          <Link className="nav-link" to="/About">About</Link>
        </li>

        <li className={`nav-item ${path == "shop"?"active bg-primary":""}`}>
          <Link className="nav-link" to="/shop">shop</Link>
        </li>

       
      </ul>
     <button onClick={()=>changecolor()} className='btn btn-primary btn-sm text-capitalize'>{color.text}</button>
     {path == "shop"?<button className='btn btn-danger btn-sm text-capitalize mx-1'>your balance is : {money} Rs</button>:""}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar