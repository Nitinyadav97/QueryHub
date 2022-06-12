import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ques.css"

const Ques = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ds8k8r', 'template_9yftntl', form.current, '4JV8qzNu_7E3k0TXc')
      .then((result) => {
        console.log(result.text);
        alert("Your query is sent")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className='main'>

      
      <div className='fcontainer'>

        <img src={require('./logo.png')} alt="Logo" />

        <div className='myform'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='mydiv' >
              <label className='mylabel'>Name</label>
              <input className='ninput' type="text" name="user_name" placeholder="Your name.." />
            </div>
            <div className='mydiv' >
              <label className='mylabel'>Email</label>
              <input className='ninput' type="email" name="user_email" placeholder="Your email.."/></div>
            <div className='mydiv' >
              <label className='mylabel'>Message</label>
              <div ><textarea className='qinput' name="message" placeholder="Your Question here.."/></div>
            </div>
            <input className='send mylabel' type="submit" value="Send" />
          </form>

        </div>

      </div>

      <div><img className='bgimg' src={require('./bg.png')} alt="Logo" /></div>

    </div>



  )

}

export default Ques