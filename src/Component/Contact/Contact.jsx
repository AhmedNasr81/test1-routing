import React from 'react';
import Style from "../Contact/Contact.module.css"
export default function Contact() {
  return (
    <>
      <div className={`container w-75 h-100 ${Style.ma}`}>

       
        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
  
  <div>
    <h2 className={`fs-1 fw-bold ${Style.co}`}>Contact Section</h2>
  </div>


  <div className="d-flex align-items-center justify-content-center mt-2">
    <div
      className="line me-3"
      style={{ backgroundColor: 'rgb(44, 62, 80)', height: '1px', width: '100px' }}
    ></div>
    <i className="fa-solid fa-star"></i>
    <div
      className="line ms-3"
      style={{ backgroundColor: 'rgb(44, 62, 80)', height: '1px', width: '100px' }}
    ></div>
  </div>
</div>


      
        <form className="w-50 p-3 mx-auto mt-5">
          <label htmlFor="userName" className="position-relative">Username:</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your username"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <label htmlFor="userAge" className="position-relative">Age:</label>
          <input
            id="userAge"
            type="text"
            placeholder="Enter your age"
            name="userAge"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <label htmlFor="userEmail" className="position-relative">Email:</label>
          <input
            id="userEmail"
            type="email"
            placeholder="Enter your email"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <label htmlFor="userPassword" className="position-relative">Password:</label>
          <input
            id="userPassword"
            type="password"
            placeholder="Enter your password"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <button
            type="submit"
            className="btn mt-4 text-white"
            style={{ backgroundColor: '#1abc9c' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
