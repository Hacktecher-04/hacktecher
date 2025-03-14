import React, { useState } from "react";
import Base from "../screens/Base";
import "../css/services.css";

const Services = () => {
    const [showMore, setShowMore] = useState({});

    const toggleShowMore = (index) => {
        setShowMore((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const services = [
        { title: "Emergency Services", text: "We provide emergency services to patients who need immediate medical attention.", img: "https://images.unsplash.com/vector-1739112852431-31b6c296a22f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW1lcmdlbmN5JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", alt: "Emergency" },
        { title: "Specialized Services", text: "We offer specialized services to patients with unique medical needs.", img: "https://images.unsplash.com/vector-1739112852224-1835510b8b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3BlY2lhbGl6ZWQlMjBTZXJ2aWNlcyUyMG1lZGljYWx8ZW58MHx8MHx8fDA%3D", alt: "Specialized", extraCss: true },
        { title: "Outpatient Services", text: "We provide outpatient services to patients who do not require hospitalization.", img: "https://plus.unsplash.com/premium_vector-1726062951813-9dc592ec3a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T3V0cGF0aWVudCUyMFNlcnZpY2VzfGVufDB8fDB8fHww", alt: "Outpatient" },
        { title: "Pharmacy Services", text: "We provide pharmacy services to patients who need medication.", img: "https://plus.unsplash.com/premium_vector-1731673632529-403ba33aec9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1lZGljaW5lc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Pharmacy" },
        { title: "Telemedicine Services", text: "We offer telemedicine services to connect patients with healthcare professionals remotely.", img: "https://plus.unsplash.com/premium_vector-1682310646248-64db78a4b7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFRlbGVtZWRpY2luZSUyMFNlcnZpY2VzfGVufDB8fDB8fHww", alt: "Telemedicine" },
        { title: "Home Care Services", text: "We provide home care services to patients who require care at home.", img: "https://plus.unsplash.com/premium_vector-1683141124301-701a58b07a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvbWUlMjBDYXJlJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", alt: "Home Care" },
        { title: "Rehabilitation Services", text: "We offer rehabilitation services to help patients recover from injuries or illnesses.", img: "https://plus.unsplash.com/premium_vector-1725950905151-782b99b57d72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVoYWJpbGl0YXRpb24lMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Rehabilitation" },
        { title: "Wellness Services", text: "We provide wellness services to help patients maintain good health.", img: "https://images.unsplash.com/vector-1741180105062-54edb1ad9f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFdlbGxuZXNzJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", alt: "Wellness" },
        { title: "Long-Term Care Services", text: "We offer long-term care services to patients who need ongoing support.", img: "https://plus.unsplash.com/premium_vector-1682303627431-3c29520e7d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZyUyMFRlcm0lMjBDYXJlJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", alt: "Long-Term Care" },
        { title: "Intensive Care Services", text: "We provide intensive care services to patients who require intensive care.", img: "https://plus.unsplash.com/premium_vector-1725706558112-d077bc498085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW50ZW5zaXZlJTIwQ2FyZSUyMFNlcnZpY2VzfGVufDB8fDB8fHww", alt: "Intensive Care" },
        { title: "Maternity Services", text: "We offer maternity services.", img: "https://plus.unsplash.com/premium_vector-1732834457271-3fb302cbaac0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWF0ZXJuaXR5JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", alt: "Maternity" },
    ];

    return (
        <Base>
            <div className="containerss">
                <div className="hero">
                    <h1>Services</h1>
                    <p>
                        We offer a wide range of medical services to meet your needs.
                    </p>
                    <button className="btn btn-outline-dark">Learn More</button>
                </div>
                {services.map((service, index) => (
                    <section key={index} className="view-service" style={{ marginBottom: "20px" }}>
                        <div className="text">
                            <h1>{service.title}</h1>
                            <p>
                                <span style={{ whiteSpace: "pre-line", overflow: "hidden" }}>
                                    {showMore[index] ? service.text : `${service.text.substring(0, 100)}...`}
                                </span>
                            </p>
                            <button className="btn btn-outline-dark" onClick={() => toggleShowMore(index)}>
                                {showMore[index] ? "Show Less" : "Show More"}
                            </button>
                        </div>
                        <div className="image" style={{ width: "max-content" }}>
                            <img src={service.img} alt={service.alt} />
                        </div>
                    </section>
                ))}
            </div>
        </Base>
    );
};

export default Services;

