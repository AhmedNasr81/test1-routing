import React from 'react';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={Style.foot}>
        <div className="container">
          <div className="row text-white py-5">
            <div className="col-lg-4 text-center">
              <h1 className="fw-bold">LOCATION</h1>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-lg-4 text-center">
              <h1 className="fw-bold">AROUND THE WEB</h1>
              <div className="d-flex justify-content-around">
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <h1 className="fw-bold">ABOUT FREELANCER</h1>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
     <div className={`d-flex justify-content-center w-100 ${Style.under}   `}>
<p className='text-white mt-4'>
  Copyright © Your Website 2021
</p>
        </div>
      </div>

    </>
  );
}
