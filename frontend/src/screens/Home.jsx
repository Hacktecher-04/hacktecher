import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Home = () => {
    const [date, setDate] = useState("");
    const inputRef = useRef(null);

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
                    duration: 0.5,
                });
            }
        };

        bar.addEventListener("click", handleBarClick);

        return () => {
            bar.removeEventListener("click", handleBarClick);
        };
    }, []);

    const handleInput = (e) => {
        setDate(e.target.value);
    };

    const handleButtonClick = () => {
        return inputRef.current.value;
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">Logo</div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
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
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <section className="view-1">
                    <div className="main">
                        <div className="img">
                            <img
                                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                                alt="" /></div>
                        <div className="bottom">
                            <h1>Health Care</h1>
                            <input
                                type="search"
                                placeholder="Enter your text here"
                                value={date}
                                onChange={handleInput}
                                ref={inputRef}
                            />
                            <button type="submit" onClick={handleButtonClick}>Send</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;

