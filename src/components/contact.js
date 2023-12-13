import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sac9ayv",
        "template_2t1xegt",
        form.current,
        "-VfmMifkLEphDU53m"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="text-center text-white d-flex justify-content-around pb-3"
      style={{ backgroundColor: "#2E4C80" }}
    >
      <h1 style={{ paddingTop: 60, fontSize: 70 }}>Contact Us</h1>

      <form ref={form} onSubmit={sendEmail} style={{ fontSize: 23 }}>
        <label className="text-start pt-5">
          Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        {/* <br/> */}
        <input
          type="text"
          name="user_name"
          required
          style={{ width: 400, height: 30, color: "#2E4C80" }}
        />
        <br />
        <label className="text-start pt-3 pb-1">
          Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        {/* <br/> */}
        <input
          type="email"
          name="user_email"
          required
          style={{ width: 400, height: 30, color: "#2E4C80" }}
        />
        <br />
        <label className="text-start pt-5">Message :  &nbsp;</label>
        {/* <br/> */}
        <textarea
          name="message"
          required
          style={{width: 400, height: 50, color: "#2E4C80" }}
        />
        <br className="p-5" />
        <input
          type="submit"
          value="Send A Message"
          style={{
            fontSize: 20,
            color: "#2E4C80",
            margin: "5%",
            boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            width: 200,
            height: 35,
          }}
        />
      </form>
      {/* <form className="text-end">
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
      </form> */}
    </section>
  );
};

export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div>
//       <h1>Contact us</h1>
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   );
// };

// export default Contact;
