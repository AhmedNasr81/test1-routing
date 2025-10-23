import React from 'react'
import Style from "../Home/Home.module.css"
import Img from "../../assets/avataaars.svg"
export default function Home() {
  return (
<>
  <div className={`${Style.co} py-5`}>
     <div className={`container w-100 d-flex flex-column justify-content-center align-items-center  py-5 mt-5 `} >
    <div>
<img src={Img} className='w-100 py-5' alt="" />
    </div>
 <div className="d-flex flex-column align-items-center justify-content-center mb-3">
  
  <div>
    <h2 className={`fs-1 fw-bold text-white`}>  Start Framework
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
    <div className='py-2  text-white'>Graphic Artist - Web Designer - Illustrator</div>
  </div>
  </div>

</>  )
}

