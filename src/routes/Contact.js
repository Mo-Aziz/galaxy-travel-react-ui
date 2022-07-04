import React from "react";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import HeroImage from "../components/heroImage/HeroImage";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT." text="CONTACT GALAXY TRVL"/>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
