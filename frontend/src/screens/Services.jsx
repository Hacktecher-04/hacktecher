import React from "react";
import Base from "../screens/Base";
import "../css/services.css";

const Services = () => {
    return (
        <Base>
            <div className="container">
                <section className="view-service-1">
                    <div className="text">
                        <h1>Services</h1>
                        <p>
                            We offer a wide range of medical services to meet your needs.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/services.png" alt="Services" />
                    </div>
                </section>

                <section className="view-service-2">
                    <div className="text">
                        <h1>Emergency Services</h1>
                        <p>
                            We provide emergency services to patients who need immediate medical attention.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/emergency.png" alt="Emergency" />
                    </div>
                </section>

                <section className="view-service-3">
                    <div className="text">
                        <h1>Specialized Services</h1>
                        <p> We offer specialized services to patients with unique medical needs.</p>
                    </div>
                    <div className="img">
                        <img src="images/specialized.png" alt="Specialized" />
                    </div>
                </section>  

                <section className="view-service-4">
                    <div className="text">  
                        <h1>Outpatient Services</h1>
                        <p>
                            We provide outpatient services to patients who do not require hospitalization.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/outpatient.png" alt="Outpatient" />
                    </div>
                </section>

                <section className="view-service-5">
                    <div className="text">
                        <h1>Diagnostic Services</h1>
                        <p>
                            We offer diagnostic services to help identify and treat medical conditions.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/diagnostic.png" alt="Diagnostic" />
                    </div>
                </section>

                <section className="view-service-6">
                    <div className="text">
                        <h1>Pharmacy Services</h1>
                        <p>
                            We provide pharmacy services to patients who need medication.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/pharmacy.png" alt="Pharmacy" />
                    </div>
                </section>

                <section className="view-service-7">
                    <div className="text">
                        <h1>Telemedicine Services</h1>
                        <p>
                            We offer telemedicine services to connect patients with healthcare professionals remotely.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/telemedicine.png" alt="Telemedicine" />
                    </div>
                </section>

                <section className="view-service-8">
                    <div className="text">
                        <h1>Home Care Services</h1>
                        <p>
                            We provide home care services to patients who require care at home.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/homecare.png" alt="Home Care" />
                    </div>
                </section>  

                <section className="view-service-9">
                    <div className="text">
                        <h1>Rehabilitation Services</h1>
                        <p>
                            We offer rehabilitation services to help patients recover from injuries or illnesses.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/rehabilitation.png" alt="Rehabilitation" />
                    </div>
                </section>

                <section className="view-service-10">
                    <div className="text">
                        <h1>Wellness Services</h1>
                        <p>
                            We provide wellness services to help patients maintain good health.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/wellness.png" alt="Wellness" />
                    </div>
                </section>

                <section className="view-service-11">
                    <div className="text">  
                        <h1>Long-Term Care Services</h1>
                        <p> We offer long-term care services to patients who need ongoing support.</p>
                    </div>
                    <div className="img">
                        <img src="images/longterm.png" alt="Long-Term Care" />
                    </div>
                </section>

                <section className="view-service-12">
                    <div className="text">
                        <h1>Medical Imaging Services</h1>
                        <p>
                            We provide medical imaging services to help diagnose and treat medical conditions.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/imaging.png" alt="Medical Imaging" />
                    </div>
                </section>

                <section className="view-service-13">
                    <div className="text">
                        <h1>Intensive Care Services</h1>
                        <p>
                            We provide intensive care services to patients who require intensive care.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/intensive.png" alt="Intensive Care" />
                    </div>
                </section>                  

                <section className="view-service-14">
                    <div className="text">
                        <h1>Maternity Services</h1>
                        <p>
                            We offer maternity services 
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/maternity.png" alt="Maternity" />
                    </div>
                </section>

                <section className="view-service-15">
                    <div className="text">
                        <h1>Pediatric Services</h1>
                        <p>
                            We provide pediatric services to children who need medical care.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/pediatric.png" alt="Pediatric" />
                    </div>
                </section>

                <section className="view-service-16">
                    <div className="text">
                        <h1>Geriatric Services</h1>
                        <p>
                            We offer geriatric services to elderly patients who need medical care.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/geriatric.png" alt="Geriatric" />
                    </div>
                </section>

                <section className="view-service-17">
                    <div className="text">
                        <h1>Primary Care Services</h1>
                        <p>
                            We provide primary care services to patients who need routine medical care.
                        </p>
                    </div>
                    <div className="img">
                        <img src="images/primary.png" alt="Primary Care" />
                    </div>  
                </section>

            </div>
        </Base>
    );
};

export default Services;
