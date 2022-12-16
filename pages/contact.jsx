import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form so I can immortalize your memories, too.."
      />
      <Contact />
    </div>
  );
};

export default contact;
