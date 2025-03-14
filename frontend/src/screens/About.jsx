import React from "react";
import Base from "../screens/Base";
import "../css/about.css";

const About = () => {
  return (
    <Base>
     <section class="about-section">
        <div class="container">
            <h2>About Us</h2>
            <p>Welcome to <strong>Our Hospital</strong>, where compassionate care meets medical excellence. Our dedicated team is committed to providing high-quality healthcare services tailored to your needs.</p>
        </div>
    </section>

  
    <section class="mission-section">
        <div class="container">
            <h2>Our Mission</h2>
            <p>Our mission is to deliver patient-centered healthcare with excellence in quality, service, and access. We strive to create a warm and healing environment for our patients.</p>
        </div>
    </section>


    <section class="vision-section">
        <div class="container">
            <h2>Our Vision</h2>
            <p>To be the most trusted healthcare provider, known for our innovative medical treatments, compassionate patient care, and state-of-the-art facilities.</p>
        </div>
    </section>


    {/* <section class="values-section">
        <div class="container">
            <h2>Our Values</h2>
            <ul>
                <li><strong>Compassion:</strong> We care deeply about our patients and their families.</li>
                <li><strong>Integrity:</strong> We uphold the highest standards of ethics and professionalism.</li>
                <li><strong>Excellence:</strong> We continuously improve our services for better patient outcomes.</li>
            </ul>
        </div>
    </section>

  
    <section class="why-choose">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <ul>
                <li>✔ Advanced medical technology & equipment</li>
                <li>✔ Highly skilled doctors & specialists</li>
                <li>✔ 24/7 emergency & critical care services</li>
                <li>✔ Patient-first approach with personalized care</li>
            </ul>
        </div>
    </section> */}


    <section class="team-section">
        <div class="container">
            <h2>Meet Our Team</h2>
            <p>Our team of experienced doctors, nurses, and healthcare professionals are dedicated to ensuring the best possible care for our patients.</p>
        </div>
    </section>

 
    <section class="testimonials">
        <div class="container">
            <h2>What Our Patients Say</h2>
            <blockquote>“The care I received at this hospital was exceptional. The staff was friendly, and the doctors were highly professional.” - <strong>John Doe</strong></blockquote>
            <blockquote>“A hospital that truly puts its patients first. Highly recommended for quality healthcare.” - <strong>Sarah Smith</strong></blockquote>
        </div>
    </section>
    </Base >
  );
};

export default About;