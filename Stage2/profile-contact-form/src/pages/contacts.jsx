import React from "react";

import ContactForm from './form'

import Footer from "../components/footer";

function Contact() {
  
  return (
    <>
      <div className="form-containter">
        <ContactForm/>
      </div>
      <div className="myFooter">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
