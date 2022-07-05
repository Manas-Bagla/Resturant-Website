import React from 'react'
import Galary from "./galary.css"


// const galary = (props) => {
//   return (
//     <div className='galary'>
//       <h1>Our Best Dishes.</h1>
//       {/* <i class="fas fa-arrow-right"></i>
//       <i class="fas fa-arrow-left"></i> */}

//       <div className='galary-card'>
//         <img src={props.imageSrc}/>
//         <h2>{props.title}</h2>
//         <h1></h1>
//       </div>
//     </div>
//   )
// }

const galary = (props) => {
  return (
    <div className='galary' id='galarySec'>
    {/* <h1>Famous Dishes</h1> */}
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/galary.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Speacial Pizza</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/galary2.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Onion Delight</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/galary3.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default galary
