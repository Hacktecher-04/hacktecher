import React, { useRef, useState } from "react";
import axios from "../config/axios";
import "../css/chatbot.css";


const ChatBot = () => {
    const [date, setDate] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    const mainRef = useRef(null);
    const responseRef = useRef(null);

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
            <main>
                <section className="view">
                    <div className="main" ref={mainRef}>
                        <div className="img">
                            <img
                                src="src/assets/images/chatbot.png"
                                alt="" /></div>
                        <div className="bottom">
                            <h1>Health Care</h1>
                            <textarea
                                type="Search"
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
                            }}
                            dangerouslySetInnerHTML={{ __html: data.replace(/\*/g, "") }}
                        />
                    )}
                    </div>
                </section>
            </main>
    );
};

export default ChatBot;