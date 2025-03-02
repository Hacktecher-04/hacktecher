import React, { useEffect } from "react";
import Base from "../screens/Base";
import { gsap, ScrollTrigger } from "gsap/all";
import "../css/home.css";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        gsap.from(".view-1 img", { opacity: 0, duration: 1, delay: 0.5 });
        gsap.from(".view-1 .text", { opacity: 0,x:-200, duration: 1, delay: 1 });
        gsap.from(".view-1 button", { opacity: 0,y: 100, duration: 1, delay: 1.5 });
        gsap.to(".view-1 img", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".view-1 .text", { opacity: 1, x:0, duration: 1, delay: 1 });
        gsap.to(".view-1 button", { opacity: 1, y:0, duration: 1, delay: 1.5 });
        
        gsap.from(".view-3 .head", { opacity: 0,y: -100, duration: 1, delay: 0.5 });
        gsap.to(".view-3 .head", { opacity: 1, y:0, duration: 1, delay: 0.5 });

        gsap.from(".view-3 .content", { opacity: 0,y: 100, duration: 1, delay: 1 });
        gsap.to(".view-3 .content", { opacity: 1, y:0, duration: 1, delay: 1 });



    }, []);

    return (
        <Base>
            <div className="container">
                <section className="view-1">
                    <img src="src/assets/images/docter.png" alt="" />
                    <div className="text">
                        <h1>Health Care</h1>
                        <p>Trusted care, healthier lives</p>
                        <button>Get Started</button>
                    </div>
                </section>
                <section className="view-2">
                    <div className="img img-1">
                        <h1>1</h1>
                        <p></p>
                        <button></button>
                    </div>
                    <div className="img img-2">
                        <h1>2</h1>
                        <p></p>
                        <button></button>
                    </div>
                    <div className="img img-3">
                        <h1>3</h1>
                        <p></p>
                        <button></button>
                    </div>
                    <div className="img img-4">
                        <h1>4</h1>
                        <p></p>
                        <button></button>
                    </div>
                    <div className="img img-5">
                        <h1>5</h1>
                        <p></p>
                        <button></button>
                    </div>

                </section>

                <section className="view-3">
                    <div className="head">
                        <h1>5</h1>
                    </div>
                    <div className="content">
                        <div className="cont-1">
                            <img src="" alt="" />
                            <h3>66</h3>
                        </div>
                        <div className="cont-2">
                            <img src="" alt="" />
                            <h3>66</h3>
                        </div>
                        <div className="cont-3">
                            <img src="" alt="" />
                            <h3>66</h3>
                        </div>
                    </div>
                    <img className="img" src="" alt="" />
                </section>
                
                <section className="view-4"></section>

                <section className="view-5">
                <img src="" alt="" />
                    <div className="content">
                        <h1>Health Care</h1>
                        <p>Trusted care, healthier lives</p>
                        <button>Get Started</button>
                    </div>
                </section>

                <section className="view-6">
                    <img src="" alt="" />
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