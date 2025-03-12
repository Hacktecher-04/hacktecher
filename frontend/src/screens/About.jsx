import React from "react";
import Base from "../screens/Base";
import "../css/about.css";

const About = () => {
  return (
    <Base>
      <div className="container-about">  

        <section className="view-about">
          <div className="text">
            <h1>About</h1>
            <p>
              Welcome to our hospital, where we prioritize patient care and
              excellence in healthcare. Our mission is to provide compassionate
              medical services that meet the needs of our patients and their  families.
            </p>
          </div>
        </section>

        <section className="view-about">
          <div className="text">
            <h1>Our Mission</h1>
            <p>
              At our hospital, we are committed to providing high-quality
              healthcare services to our patients. We strive to create a
              welcoming and supportive environment where patients feel
              comfortable and cared for.
            </p>
          </div>
        </section>

        <section className="view-about">
          <div className="text">
            <h1>Our Vision</h1>
            <p>
              Our vision is to be a leader in healthcare by providing
              exceptional medical services to our patients. We aim to be a
              trusted healthcare provider that is known for its commitment to
              excellence and patient care.
            </p>
          </div>
        </section>

        <section className="view-about">
          <div className="text">
            <h1>Our Values</h1>
            <p>
              Our values reflect our commitment to excellence in healthcare
              services. We believe in providing compassionate care, transparency,
              and integrity in all that we do. Our team is dedicated to
              upholding these values and ensuring that our patients receive the best
            </p>
          </div>
        </section>

        <section className="view-about-5">
          <div className="text">
            <h1>Our Team</h1>
            <p>
              Our dedicated team of healthcare professionals is committed to
              providing exceptional care to our patients. We believe in
              fostering a culture of teamwork and collaboration, where
              everyone plays a role in the success of our patients.
            </p>
          </div>
          <div className="img">
            <img src="images/about5.png" alt="About" />
          </div>
        </section>

        <section className="view-about-6">
          <div className="img">
            <img src="images/about6.png" alt="About" />
          </div>
          <div className="text">
            <h1>Our Testimonials</h1>
            <div className="testimonial-blocks">
              <div className="block">
                <img src="images/testimonial1.png" alt="Testimonial" />
                <p className="name">Jane Doe</p>
                <p>
                  "I was diagnosed with cancer and the doctors at this
                  hospital treated me with such care and compassion. I am so
                  grateful for their help."
                </p>
              </div>
              <div className="block">
                <img src="images/testimonial2.png" alt="Testimonial" />
                <p className="name">Jane Doe</p>
                <p>
                  "I was in a car accident and the doctors at this hospital
                  saved my life. I am so thankful for their quick thinking and
                  expertise."
                </p>
              </div>
              <div className="block">
                <img src="images/testimonial3.png" alt="Testimonial" />
                <p className="name">Bob Smith</p>
                <p>
                  "I had a heart attack and the doctors at this hospital
                  performed a bypass surgery on me. I am so grateful for their
                  help."
                </p>
              </div>
              <div className="block">
                <img src="images/testimonial4.png" alt="Testimonial" />
                <p className="name">Alice Johnson</p>
                <p>
                  "I was diagnosed with diabetes and the doctors at this
                  hospital helped me manage my condition. I am so grateful for
                  their help."
                </p>
              </div>
              <div className="block">
                <img src="images/testimonial5.png" alt="Testimonial" />
                <p>
                  "I had a stroke and the doctors at this hospital helped me
                  recover. I am so grateful for their help."
                </p>
              </div>
            </div>
          </div>
        </section>

      </div >
    </Base >
  );
};

export default About;