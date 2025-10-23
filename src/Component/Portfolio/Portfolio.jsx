import React, { useState } from 'react';
import Style from "../Portfolio/Portfolio.module.css";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [Img1, Img2, Img3, Img1, Img2, Img3];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <>
      <section className="py-5">
        <div className="container py-5">

    
          <div className="text-center mb-4 mt-5">
            <h2 className={`fs-1 fw-bold text-uppercase ${Style.co}`}>
              Portfolio Component
            </h2>

            <div className="d-flex align-items-center justify-content-center mt-3 mb-4">
              <div
                className="me-3"
                style={{ backgroundColor: 'rgb(44, 62, 80)', height: '3px', width: '80px' }}
              ></div>
              <i className="fa-solid fa-star fs-5" style={{ color: 'rgb(44, 62, 80)' }}></i>
              <div
                className="ms-3"
                style={{ backgroundColor: 'rgb(44, 62, 80)', height: '3px', width: '80px' }}
              ></div>
            </div>
          </div>

          <div className="row g-5 justify-content-center">
            {images.map((img, index) => (
              <div key={index} className={`col-12 col-md-6 col-lg-4 ${Style.imageContainer}`}>
                <div className={Style.overlayContainer} onClick={() => handleImageClick(img)}>
                  <img src={img} alt={`Portfolio ${index + 1}`} className={`w-100 rounded-3 shadow-sm`} />
                  <div className={Style.overlay}>
                    <i className="fa-solid fa-plus fa-4x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedImage && (
        <div className={Style.fullOverlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className={Style.enlargedImage} />
        </div>
      )}
    </>
  );
}