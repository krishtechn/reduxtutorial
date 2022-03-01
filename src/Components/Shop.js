import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
import data from "./Shopdata";
import { Link, Router } from 'react-router-dom';

const Shop = () => {
    // const [value,setvalue] = useState(50);
const [menu,setmenu] = useState(data);




    return (
        <>
        <Header items={menu}/>
        <Container items={menu} setdata = {setmenu}/>
        
        </>
    )
}


const Header = (props) => {
    let item = props.items.length;
    useEffect(()=>{
        document.title = `Shooping Cart`;
        setTimeout(() => {
            document.title = `you have ${item} Cart`;
        }, 3000);
    })
    return (
        <div className="navcontainer">
            <nav className='navbar'>
                <div className="leftnav">
                    <i class="fa fa-arrow-left" onClick={()=>window.history.back("/")} aria-hidden="true"></i>
                    <span className='lefttext'>Continue shopping</span>
                </div>

                <div className="rightmenu">
                <i class="fa fa-shopping-cart" style={{fontSize:25}} aria-hidden="true">
             <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{marginTop:17,marginLeft:10,width:30,height:30}}>
          {
              item
          }
               <span class="visually-hidden">unread messages</span>
             </span>
             </i>
                </div>
            </nav>
        </div>
    )
}


const Container = (props)=>{
    const [input,setinput] = useState(1);
    const data = props.items;
    const setdata = props.setdata;
    
    const newcategory = [...new Set(data.map((items)=> items.category)),"all"];
    

    const removeitem = (id)=>{

        const newdata = data.filter((category)=>{
            return category.id !== id;
        });

        return setdata(newdata);
      }


      const filteritems = (filterdata)=>{
          if(filterdata === "all"){
              return setdata(data);
          }
        const newdata = data.filter((items)=>{
             return items.category === filterdata;
         })
            setdata(newdata);
      }

let pdata;
    return (
        <div className='container my-3'>
            <div className="topcontent">
                <h1 style={{fontSize:20,letterSpacing:1}}>shopping cart</h1>
                <p style={{fontSize:15,color:"#000",fontWeight:300,textTransform:"capitalize",letterSpacing:2}}>you have {data.length} items in shopping cart</p>
            </div>

            <div className="row mx-auto  text-center">
           {data != ""? <div className="category">         
    {newcategory.map((items,index)=>{
      return <button onClick={()=>filteritems(items)} key={index} className='buttons btn btn-danger' style={{display:"grid",width:"100%",marginTop:"20%"}}>{items}</button>;
    })}
</div>:""}
      <div className="cshopr">
      <button className='buttons btn btn-danger' onClick={()=>window.location.reload()}>Reload</button>         
               {data.map((items)=>{
                   const {id,mobileimg,link,mobilename,desc,price} = items
                   console.log(price);
                   let prices = [price];
                   pdata = [...prices,input];
                   return (
                    <table class="table">
                    <tr>
                        <td><img src={mobileimg} alt="" /></td>
                    
                         <td><div className="text">
                             <h2><a href={link}>{mobilename}</a></h2>
                             <span style={{color:"red"}}>{desc}</span>
                            </div></td>
                        <td><div className="shopp">
                        <button className='btn' onClick={()=>setinput(input + 1)}>+</button>
                        <input value={input} onChange={(e)=>setinput(e.target.value)} className='input' placeholder='🔢 5' type="number"/>
                        <button onClick={()=>{
                            if(input > 0){
                                setinput(input - 1)
                                
                             setTimeout(() => {
                                 document.title = `shooping cart`;
                             }, 5000);
                            }else{
                                alert("your money 0 ");
                            }
                        }} className='btn'>-</button>
                        </div></td>
                        <td><span>{input * price}$</span></td>
                        <td><a href={link} className="btn btn-outline-danger btn-sm" target="_blank">Order Now</a></td>
                        <td><i class="fa fa-trash-o" onClick={()=>removeitem(id)} aria-hidden="true"></i></td>
                    </tr>
                    </table>
                   )
               })}
             
               
           <div className="btn d-flex" style={{justifyContent:"space-between",flexDirection:"row-reverse",alignItems:"center"}}>
            <h3 className='totalcart'>Cart total : {input == 0?"0":pdata}$</h3>
           {
               data != ""? <button className='btn btn-danger btn-sm' onClick={()=>{
                setdata([]);
                setinput(0)
            }}>Clear cart</button>:<>
            <span>data has been clear</span>
            <button className='btn btn-sm btn-primary' onClick={()=>{
                window.location.reload();
            }}>Reload</button>
            </>
           }
           
           </div>
                </div>
             </div>
        </div>
    )
}



export default Shop