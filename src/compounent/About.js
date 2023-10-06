import React from "react";
import "../compounent/About.css";

function About() {
  return (
    <div className="main">
      <div className="nav">
        
        <div>
          <i className="fa-regular fa-arrow-down-to-line"></i>
        </div>
      </div>
      <div className="about-container">
        <h2 className="name">Nitesh Anand</h2>
        <hr />
        <h3>Date of birth</h3>
        <p>18th Feb,1990</p>
        <h3>Nationality</h3>
        <p>Indian</p>
        <h3>Email address</h3>
        <p>nitsh4u029@gmail.com'</p>

        <h3>Address</h3>
        <p>
          403,9th A main, HRBR Layout, Kalyan Nager, Bengalure 560043, India
        </p>
        <h3>Phone Number</h3>
        <p>888444987</p>
        <h3>Web</h3>
       <div className="linkdin">
       <p><a href="http://www.linkedin.com/in/nitishanand-a46b888a/">
          http://www.linkedin.com/in/nitishanand-a46b888a/
        </a></p>
       </div>

        <p>
          Seasoned Senior Front End Devloper With a distinguished six-year
          journey specializing in React, demonstrating proficency since its
          inception Possessing exceptional expertise in javascript, i have honed
          my skills to craft hig and scalable code{" "}
        </p>
        <p>
          My project portfolio spans diverse industries, including e-commerce,
          OTT (Over-The_top), and banking and finance, showcasing adaptability
          and versatility in developing tailored solutions for varying client
          needs. I am dedicated to writing code that not only meets immediate
          requirements but also ensure long-term scalability and efficiency,
          aligning perfectly with moderndevlopment best prictices.
        </p>
      </div>
      
    </div>
  );
}

export default About;
