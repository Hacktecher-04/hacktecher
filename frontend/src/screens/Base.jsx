import React from "react";
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
            <p>&copy; 2023 Health Care</p>
        </footer>
    );
}

export default Base;


