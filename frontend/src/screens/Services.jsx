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
        { title: "Emergency Services", text: "We provide emergency services to patients who need immediate medical attention.", img: "images/emergency.png", alt: "Emergency" },
        { title: "Specialized Services", text: "We offer specialized services to patients with unique medical needs.", img: "images/specialized.png", alt: "Specialized" },
        { title: "Outpatient Services", text: "We provide outpatient services to patients who do not require hospitalization.", img: "images/outpatient.png", alt: "Outpatient" },
        { title: "Pharmacy Services", text: "We provide pharmacy services to patients who need medication.", img: "images/pharmacy.png", alt: "Pharmacy" },
        { title: "Telemedicine Services", text: "We offer telemedicine services to connect patients with healthcare professionals remotely.", img: "images/telemedicine.png", alt: "Telemedicine" },
        { title: "Home Care Services", text: "We provide home care services to patients who require care at home.", img: "images/homecare.png", alt: "Home Care" },
        { title: "Rehabilitation Services", text: "We offer rehabilitation services to help patients recover from injuries or illnesses.", img: "images/rehabilitation.png", alt: "Rehabilitation" },
        { title: "Wellness Services", text: "We provide wellness services to help patients maintain good health.", img: "images/wellness.png", alt: "Wellness" },
        { title: "Long-Term Care Services", text: "We offer long-term care services to patients who need ongoing support.", img: "images/longterm.png", alt: "Long-Term Care" },
        { title: "Medical Imaging Services", text: "We provide medical imaging services to help diagnose and treat medical conditions.", img: "images/imaging.png", alt: "Medical Imaging" },
        { title: "Intensive Care Services", text: "We provide intensive care services to patients who require intensive care.", img: "images/intensive.png", alt: "Intensive Care" },
        { title: "Maternity Services", text: "We offer maternity services.", img: "images/maternity.png", alt: "Maternity" },
        { title: "Pediatric Services", text: "We provide pediatric services to children who need medical care.", img: "images/pediatric.png", alt: "Pediatric" },
        { title: "Geriatric Services", text: "We offer geriatric services to elderly patients who need medical care.", img: "images/geriatric.png", alt: "Geriatric" },
        { title: "Primary Care Services", text: "We provide primary care services to patients who need routine medical care.", img: "images/primary.png", alt: "Primary Care" },
    ];

    return (
        <Base>
            <div className="containerss">
                <div className="hero">
                    <h1>Services</h1>
                    <p>
                        We offer a wide range of medical services to meet your needs.
                    </p>
                    <button>Learn More</button>
                </div>
                {services.map((service, index) => (
                    <section key={index} className={`view-service-${index + 1}`} style={{ marginBottom: "20px" }}>
                        <div className="text" style={{ overflow: "hidden", maxHeight: "200px" }}>
                            <h1>{service.title}</h1>
                            <p>
                                <span style={{ whiteSpace: "pre-line", overflow: "hidden" }}>
                                    {showMore[index] ? service.text : `${service.text.substring(0, 100)}...`}
                                </span>
                            </p>
                            <button onClick={() => toggleShowMore(index)}>
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

