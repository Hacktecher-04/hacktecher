import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import axios from "../config/axios";

const Home = () => {
    const [date, setDate] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    const mainRef = useRef(null);
    const responseRef = useRef(null);

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

    const handleButtonClick = async () => {
        try {
            const response = await axios.get(`/ai/get-result?promt=${date}`);
            setData(response.data);
            setError(null);
            mainRef.current.style.display = "none";
            responseRef.current.style.display = "block";
        } catch (error) {
            setError(error.message);
            setData(null);
            mainRef.current.style.display = "block";
            responseRef.current.style.display = "none";
        }
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
                                alt="" /></div>
                    </div>
                </div>
            </nav>
            <main>
                <section className="view-1">
                    <div className="main" ref={mainRef}>
                        <div className="img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvc4TiGXVdvzTiQNSFA62y--ot4VdzHzFF_5tQOZEuV-Eu5hLq7RYbNuHihrXUpiSZQiM&usqp=CAU"
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
                            <button onClick={handleButtonClick}>Send</button>
                            {error && (
                                <div
                                    style={{
                                        backgroundColor: "red",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        color: "white",
                                        marginTop: "10px",
                                    }}
                                >
                                    {error}
                                </div>
                            )}
                            {data && (
                                <div
                                    style={{
                                        backgroundColor: "green",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        color: "white",
                                        marginTop: "10px",
                                    }}
                                >
                                    {data}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="response" ref={responseRef} style={{ display: "none" }}>
                    <div className="resp" style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
                    <h1 style={{ marginBottom: "20px" }}>Response</h1>
                    {data && (
                        <p
                            style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                fontSize: "1.2rem",
                                fontFamily: "Arial, sans-serif",
                                textAlign: "left",
                                lineHeight: "1.5",
                                fontWeight: 500,
                                textAlign: "justify",
                            }}
                            dangerouslySetInnerHTML={{ __html: data.replace(/\*/g, "") }}
                        />
                    )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;


