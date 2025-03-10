import React, { useEffect } from "react";
import Base from "../screens/Base";
import { gsap, ScrollTrigger } from "gsap/all";
import "../css/home.css";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        gsap.from(".view-1 img", { opacity: 0, duration: 1, delay: 0.5 });
        gsap.from(".view-1 .text", { opacity: 0, x: -200, duration: 1, delay: 1 });
        gsap.from(".view-1 button", { opacity: 0, y: 100, duration: 1, delay: 1.5 });
        gsap.to(".view-1 img", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".view-1 .text", { opacity: 1, x: 0, duration: 1, delay: 1 });
        gsap.to(".view-1 button", { opacity: 1, y: 0, duration: 1, delay: 1.5 });

        const viewThree = document.querySelector(".view-3");
        const trigger = {
            trigger: viewThree,
            start: "top 90%",
            toggleActions: "restart pause reset",
        };

        gsap.from(".view-3 .head", trigger, { opacity: 0, y: -100, duration: 1, delay: 0.5 });
        gsap.to(".view-3 .head", trigger, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

        gsap.from(".view-3 .content", trigger, { opacity: 0, y: 100, duration: 1, delay: 1 });
        gsap.to(".view-3 .content", trigger, { opacity: 1, y: 0, duration: 1, delay: 1 });



    }, []);

    return (
        <Base>
            <div className="container">
                <section className="view-1">
                    <img src="src/assets/images/docter.png" alt="" />
                    <div className="text">
                        <h1>Healwon</h1>
                        <p>Trusted care, healthier lives</p>
                        <button>Get Started</button>
                    </div>
                </section>
                <section className="view-2">
                    <div className="img img-1">
                        <div className="text">
                            <h1>2</h1>
                            <p></p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className="img img-2">
                        <div className="text">
                            <h1>Online Blood Supply</h1>
                            <p>We can order blood online from a nearby hospital.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className="img img-3">
                        <div className="text">
                            <h1>3</h1>
                            <p></p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className="img img-4">
                        <div className="text">
                            <h1>4</h1>
                            <p></p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className="img img-5">
                        <div className="text">
                            <h1>5</h1>
                            <p></p>
                            <button>Get Started</button>
                        </div>
                    </div>

                </section>

                <section className="view-3">
                    <div className="head">
                        <h1>Your healthcare journey simplified</h1>
                    </div>
                    <div className="content">
                        <div className="cont-1">
                            <img src="src/assets/images/view-3-1.png" alt="" />
                            <h3>Docter Apointment</h3>
                        </div>
                        <div className="cont-2">
                            <img src="src/assets/images/view-3-2.png" alt="" />
                            <h3>Patient</h3>
                        </div>
                        <div className="cont-3">
                            <img src="src/assets/images/view-3-3.png" alt="" />
                            <h3>Freshers & Students</h3>
                        </div>
                    </div>
                    <img className="img" src=" " alt="" />
                </section>

                <section className="view-4">
                    <p>"Good health and good sense are two of life’s greatest blessings"</p>
                </section>

                <section className="view-5">
                    <img src="src/assets/images/chatbot.png" alt="" />
                    <div className="content">
                        <h1>Health Care</h1>
                        <p>Trusted care, healthier lives</p>
                        <button onClick={() => { window.location.href = "/chatbot" }}>Get Started</button>
                        ``                    </div>
                </section>

                <section className="view-6">
                    <img src="src/assets/images/Docter-view-6.png" alt="" />
                    <div className="content">
                        <h1>For login</h1>
                        <p>Trusted care, healthier lives</p>
                        <button>Login</button>
                    </div>
                </section>
            </div>
        </Base>
    );
};

export default Home;