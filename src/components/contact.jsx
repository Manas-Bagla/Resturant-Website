import React from 'react'
import css from "./contact.css"

const contact = () => {
  return (
    <div className='contact' id='contactSec'>
      <div className='contact-map'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316550.0832418337!2d76.99493679364745!3d28.766808165724626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1656928076626!5m2!1sen!2sin" ></iframe>
 </div>
    <div className='contact-text'>
     <h1>Contact Us.</h1>
     <form>
     <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="Email1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="Email1" required aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="Message" class="form-label">Your Message</label>
  <textarea class="form-control" id="Message"  rows="3"></textarea>
</div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
     </div>
   
      
    </div>
  )
}
export default contact
