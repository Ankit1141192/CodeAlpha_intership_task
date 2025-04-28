import './contact.css';
import React, { useState } from 'react';

// Import your icons
import Facebook from "../../assets/facebook-icon.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedIn.svg";
import EmailIcon from "../../assets/gmail-svgrepo-com.svg";
import GitHub from "../../assets/github-svgrepo-com.svg";
import Phone from "../../assets/phone-calling-rounded-svgrepo-com.svg";

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxMsp13pDnKrWa6ZPzZ16IL2iz1ybKEyD_6luiMlaIFgS5wkuqIbb-vT07Dqc6KssSd/exec';
    const formData = new FormData(form);

    fetch(scriptURL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        setMessage('Message sent successfully!');
        setTimeout(() => setMessage(''), 3000);
        form.reset();
      })
      .catch((error) => {
        setMessage('Error! Please try again later.');
        console.error('Error!', error.message);
      });
  };

  return (
    <div id='contactPage'>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to get in touch.</span>

        {/* Social Icons Section */}
        <div className="socialIcons">
          <a href="https://www.facebook.com/profile.php?id=100036953027628" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="socialIcon" />
          </a>
          <a href="https://www.instagram.com/mr__unique_ankitkumar4954/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="socialIcon" />
          </a>
          <a href="tel:8707538123">
            <img src={Phone} alt="Phone" className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/ankit1141/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="socialIcon" />
          </a>
          <a href="mailto:ankit2914978@gmail.com">
            <img src={EmailIcon} alt="Email" className="socialIcon" />
          </a>
          <a href="https://github.com/Ankit1141192" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" className="socialIcon" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="contactForm"
          name="submit-to-google-sheet"
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            className="name" 
            placeholder='Your Name' 
            name="Name" 
            required 
          />
          <input 
            type="email" 
            className="email" 
            placeholder='Your Email' 
            name="Email" 
            required 
          />
          <input 
            type="number" 
            className="email" 
            placeholder='Your Number' 
            name="Phone" 
            required 
          />
          <textarea 
            name="Message" 
            placeholder='Your Message' 
            rows={5} 
            className='msg' 
            required
          ></textarea>
          <button type="submit" className='btn1'>Submit</button>
        </form>

        <span id="msg" className="formStatusMessage">{message}</span>
      </div>
    </div>
  );
};

export default Contact;
