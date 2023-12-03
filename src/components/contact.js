import React, { useState } from "react";

const Contact = () => {

  return (
    <div className="text-center bg-primary text-white d-flex justify-content-around pb-3">
      <h1 style={{paddingTop:60, fontSize:70}}>Contact Us</h1>
      <form className="text-end">
        <div className="text-end pb-3 pt-4" >
            Name: &nbsp;
          <input type="text" placeholder="Your name" name="name" required style={{width:300, height:30}}/>
        </div>
        <div className="text-end pb-3">
        Email:  &nbsp;&nbsp;
          <input type="email" placeholder="Email" name="email" required style={{width:300, height:30}} />
        </div>
        <div className="text-end pb-1">
        Message: &nbsp;
          <textarea placeholder="Your message" name="message" required style={{width:300, height:50}}/>
        </div>
        <div className="pb-4 text-end">
          <button type="submit" style={{color:"#2E4C80", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", width:200, height:30}}> Send a message </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
