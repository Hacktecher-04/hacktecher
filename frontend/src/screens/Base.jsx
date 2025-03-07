import React, { useEffect } from "react";
import { gsap } from "gsap";


const Base = ({ children }) => {

    return (
        <div className="base">
            <Header />
            <main>{children}</main>
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

        bar.addEventListener("click", handleBarClick);

        return () => {
            bar.removeEventListener("click", handleBarClick);
        };
    }, []);
    return (
        <header>
            <nav className="navbar">
                <div className="logo">Logo</div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a onClick={() => window.location.href = "/about"}>About</a>
                        </li>
                        <li>
                            <a onClick={() => window.location.href = "/services"}>Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    <div className="profile">
                        <div className="bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
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
            <div className="head">
                <h1>Health Care</h1>
                <p>Trusted care, healthier lives</p>
                <add>Address: 123 Main Street, New York, NY 10001</add>
            </div>

            <div className="nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="contact">
                <p>Call us at: 123-456-7890</p>
                <p>Email us at: 8o9yO@example.com</p>
            </div>
            <div className="copy">
                <p>&copy; 2023 Health Care. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Base;


