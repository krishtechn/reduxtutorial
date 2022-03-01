import React from 'react'

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
    ];
  return (
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
  )
}

export default About