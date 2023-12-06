import React from 'react';
const Sliderbox = () => {
  return (
  	<>
  	   <div className="sliderbox" style={{ backgroundColor: "lightgray"}}>
  	   
      	 <div className="container-fluid"style={{ width: "1800px", height: "300px" }}>   
      	    <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20" class="d-block w-100" alt="firstimage"style={{ width: "1800px", height: "300px" }}/>
                </div>
                <div class="carousel-item">
                  <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b1eb1bda72fe4374.jpg?q=20" class="d-block w-100" alt="secondimage"style={{ width: "1800px", height: "300px" }}/>
                </div>
                <div class="carousel-item">
                  <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6ee258c0b83e9ced.jpg?q=20" class="d-block w-100" alt="thirdimage"style={{ width: "1800px", height: "300px" }}/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
         </div>
      </div>
	</>	    
  );
};

export default Sliderbox;

