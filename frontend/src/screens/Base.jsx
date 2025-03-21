import React, { useEffect } from "react";
import { gsap } from "gsap";
import Chatbotmoveble from "../screens/Chatbot-moveble";



const Base = ({ children }) => {

    return (
        <div className="base">
            <Header />
            <main>{children}</main>
            <Chatbotmoveble />
            <Footer />
        </div>
    );
}

const Header = () => {
    useEffect(() => {
        const bar = document.querySelector(".bar");
        const nav = document.querySelector("nav");
        const logo = document.querySelector(".logo");
        const prf = document.querySelector(".prf");

        const handleBarClick = () => {
            bar.classList.toggle("active");
            nav.classList.toggle("active");
            logo.classList.toggle("active");

            if (bar.classList.contains("active")) {
                gsap.to(".bar span", {
                    backgroundColor: "#f1f1f1",
                    rotate: 45,
                    y: 4,
                    duration: 0.5,
                });
                gsap.to(".bar span:nth-child(2)", {
                    rotate: -45,
                    y: -4,
                    duration: 0.5,
                });
                gsap.to(".bar span:nth-child(3)", {
                    opacity: 0,
                    duration: 0.1,
                });
            } else {
                gsap.to(".bar span", {
                    rotate: 0,
                    y: 0, // Reset y position
                    opacity: 1,
                    backgroundColor: "#000",
                    duration: 0.5,
                });
            }
        };


        return () => {
            bar.removeEventListener("click", handleBarClick);
        };
    }, []);
    return (
        <header>         
            <nav className="navbar">
                <div className="logo"><img src="src/assets/images/logo.png" alt=""></img></div>
                <div className="d-flex flex-grow-1 mx-5 searchInput">
                    <input className="form-control me-1 inputBg" type="search" placeholder="Search..." />
                    <button className="btn btn-outline-light py-1" type="submit">Search</button>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a onClick={() => window.location.href = "/"}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => window.location.href = "/services"}>Services</a>
                        </li>
                        <li>
                            <a onClick={() => window.location.href = "/about"}>About</a>
                        </li>
                     
                        {/* <li>
                            <a href="#">Contact</a>
                        </li> */}
                    </ul>

                    <div className="profile">
                        <div className="bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* <div className="search-bar">
                            <i className="fa fa-search"></i>
                        </div> */}
                        <div className="prf">
                            <img
                                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                                alt="" />
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="head">
                    <h1>Health Care</h1>
                    <p>Trusted care, healthier lives</p>
                    <add>Address: 123 Main Street, New York, NY 10001</add>
                </div>

                <div className="nav">
                    <a onClick={() => window.location.href = "/"}>Home</a>
                    <a onClick={() => window.location.href = "/about"}>About</a>
                    <a onClick={() => window.location.href = "/services"}>Services</a>
                    <a href="#">Contact</a>
                </div>
                <div className="contact">
                    <a onClick={() => window.location.href = "/privacy"}>Privacy Policy & Terms and Conditions</a>
                    <a onClick={() => window.location.href = "/help"}>Help Us</a>

                    <p>Follow Us</p>
                    <div className="icons">
                        <a href="#"><img src="src/assets/icons/facebook.png" alt="Facebook"></img></a>
                        <a href="#"><img src="src/assets/icons/twitter.png" alt="Twitter"></img></a>
                        <a href="#"><img src="src/assets/icons/instagram.png" alt="Instagram"></img></a>
                        <a href="#"><img src="src/assets/icons/linkedin.png" alt="LinkedIn"></img></a>
                    </div>

                    <p onClick={() => window.open("tel:1234567890")}>Call us at: 123-456-7890</p>
                    <p onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hacktecher04@gmail.com&su=Subject&body=Body", "_self")}>Email us at: hacktecher04@gmail.com</p>
                </div>
            </div>
            <div className="copy">
                <p>&copy; 2023 Health Care. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Base;