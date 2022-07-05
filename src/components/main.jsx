import React from 'react'
// import image from "./images/main.jpg"
import Main from "./main.css"
const main = () => {
  const zomato = "https://www.zomato.com/"
  return (
    <div className='main' id='mainSec'>
    <div className='main-heading'> 
    <h1>Feel the Taste in <br /> Every Bite. </h1>
    <div className='order'>
    <a href='https://www.zomato.com' target="_blank">
    <button  type="button" class="btn btn-dark btn-lg"><i class="fa-solid fa-cart-shopping-fast fa-xl"></i> Order Now</button>
    </a>
    <a href='#aboutSec'>
    <button onClick="#aboutSec" className='btn btn-outline-danger btn-lg'>Load More</button>
    </a>
    </div>
    </div>
    </div>
  )
}

export default main
