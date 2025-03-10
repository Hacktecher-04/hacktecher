import React from "react";
import Base from "../screens/Base";
import "../css/help.css";

const Help = () => {
    return (
        <Base>
            <div className="help-container">
                <h1>Help and Support</h1>
                <p>
                    If you need assistance or have any questions, please feel free to contact our support team. We are here to help you with any issues or concerns you may have.
                </p>

                <h2>Contact Information</h2>
                <p>
                    Email: <a href="mailto:8o9yO@example.com">8o9yO@example.com</a>
                </p>
                <p>
                    Phone: <a href="tel:+1234567890">+1-234-567-890</a>
                </p>
            </div>
        </Base>
    );
};

export default Help;