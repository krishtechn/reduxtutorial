import React from 'react'
import Carosels from './Carosels';
import about1 from "../Components/image/about1.gif";

const About = (props) => {
    const about = [
        {
            id : 1,
            title:"Accordion Item #1 ",
            desc:"This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
        },
        {
            id : 2,
            title:"Accordion Item #1 ",
            desc:"This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
        },
        {
          id : 3,
          title:"Accordion Item #1 ",
          desc:"This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
      },
    ];
  return (
    <>
    <Carosels 
    image1={about1}
    image2="data:image/jpeg;base64,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" 
    image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TC-27xgQfjSKYomwoMa7Fb23TNORqepRAQ&usqp=CAU"/>
    
    <div className='container my-5'>
        <h1 className='text-center fs-3 mb-5'>About page</h1>
        <div class="accordion" id="accordionExample">
  {about.map((items)=>{
      return (
          <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {items.title}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <span>{items.desc}</span>
        </div>
      </div>
    </div>
      );
    })}
  
</div>
    </div>
    
    </>
  )
}

export default About