import React from "react";
import Base from "../screens/Base";
import "../css/home.css";

const Home = () => {
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
            </div>
        </Base>
    );
};

export default Home;