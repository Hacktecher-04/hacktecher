import React from "react";
import Base from "../screens/Base";
import "../css/privacy.css";


const Privacy = () => {
    return (    
        <Base>  
            <div className="privacy-container">
                <section className="view-privacy">
                    <div className="text">
                        <p>
                            Privacy Policy for Health Care<br></br><br></br>
                            This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.<br></br><br></br>
                            Information Collection<br></br>
                            We may collect the following types of information:<br></br>
                            Personal information, such as your name, email address, and contact details.<br></br>
                            Usage information, such as the pages you visit and the actions you take on our website.<br></br>
                            Cookies and Tracking Technologies<br></br>
                            We use cookies and other tracking technologies to enhance your experience on our website.<br></br><br></br>
                            Data Use<br></br>
                            We use the collected information for the following purposes:<br></br>
                            Providing and improving our services.<br></br>
                            Personalizing your experience.<br></br>
                            Communicating with you.<br></br>
                            Analyzing usage patterns and trends.<br></br><br></br>
                            Data Security<br></br>
                            We implement appropriate security measures to protect your information from unauthorized access, disclosure, or alteration.<br></br><br></br>     

                        </p>                        
                    </div>
                </section>
            </div>  
        </Base>
    );          
}   

export default Privacy;