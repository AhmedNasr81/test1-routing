import React from 'react'
import Img from "../../assets/avataaars.svg" 
import Style from "../About/About.module.css"
export default function About() {
  return (<>
  <div className={`${Style.co} ${Style.ma} `}>
     <div className={`container w-100 d-flex flex-column justify-content-center align-items-center  py-5 mt-5  h-100`} >
  
 <div className="d-flex flex-column align-items-center justify-content-center mb-3">
  
  <div>
    <h2 className={`fs-1 fw-bold text-white`}>  about component

</h2>
  </div>


  <div className="d-flex align-items-center justify-content-center mt-2 py-2">
    <div
      className="line me-3"
      style={{ backgroundColor: 'rgba(255, 255, 255, 1)', height: '1px', width: '100px' }}
    ></div>
    <i className="fa-solid fa-star text-white"></i>
    <div
      className="line ms-3"
      style={{ backgroundColor: 'rgba(255, 255, 255, 1)', height: '1px', width: '100px' }}
    ></div>
    
  </div>
</div>
   <div className='row text-white'>
    <div className="col-6">
      <div>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
      </div>
    </div>
      <div className="col-6">
      <div>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
      </div>
    </div>
   </div>
  </div>
  </div>
 
  </>
  )
}
