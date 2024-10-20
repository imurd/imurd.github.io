"use client";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTelegram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Alert from "@/app/components/Alerts/Alert";
import React, {useState} from "react";

interface FormData {
    name: string;
    subject: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    subject?: string;
    email?: string;
    message?: string;
}

interface AlertProps {
    type: "success" | "error";
    text: string;
}


export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });
    const [alert, setAlert] = useState<AlertProps | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, subject, email, message } = formData;
        if (!name || !subject || !email || !message) {
            setAlert({ type: 'error', text: 'All fields are required!' });
            return false;
        }
        // Basic email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setAlert({ type: 'error', text: 'Please enter a valid email address.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with submission
            console.log('Form Submitted:', formData);
            setAlert({ type: 'success', text: 'Form submitted successfully!' });

            const response = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if(response.status === 200) {
                console.log(response);
                setAlert({ type: 'error', text: 'All fields are required!' });
            }
            else if(response.status === 500){
                setAlert({ type: 'error', text: 'Please enter a valid email address.' });
            }

            // Optionally clear the form
            setFormData({
                name: '',
                subject: '',
                email: '',
                message: ''
            });
        }
    };



    return (
        <section className="container contact py-5" id="contact">
            <div className="heading ">
      <span className="pretitle" data-aos="fade-up">
        contact
      </span>
                <h2 className="title col-12" data-aos="fade-up" data-aos-delay="100">
                    contact us for Any Questions
                </h2>
                <p className="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>
            <div className="row  gx-4 ">
                <div className="col-12 col-lg-6 gy-3">
                    <h2 className="title-2 " data-aos="fade-right" data-aos-delay="200">
                        contact info :
                    </h2>
                    <div className="info d-flex my-4 " data-aos="fade-right" data-aos-delay="250">
                        <h5 className="flex align-content-center align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mx-4 w-7 h-7" />
                            <span>example@example.com</span>
                        </h5>
                    </div>

                    <div className="info d-flex my-4 " data-aos="fade-up" data-aos-delay="350">
                        <h5 className="flex align-content-center align-items-center">
                            <FontAwesomeIcon icon={faTiktok} className="mx-4 w-7 h-7" />
                            <span>A108 Adam Street, New York, NY 535022</span>
                        </h5>
                    </div>
                    <div className="info d-flex my-4 " data-aos="fade-up" data-aos-delay="400">
                        <h5>
                            <FontAwesomeIcon icon={faInstagram} className="mx-4 w-7 h-7" />
                            <span>techida-company</span>
                        </h5>
                    </div>
                    <div className="info d-flex my-4 " data-aos="fade-up" data-aos-delay="400">
                        <h5>
                            <FontAwesomeIcon icon={faTelegram} className="mx-4 w-7 h-7" />
                            <span>techida-company</span>
                        </h5>
                    </div>

                    <div className="info d-flex my-4 " data-aos="fade-up" data-aos-delay="300">
                        <h5 className="flex align-content-center align-items-center">
                            <FontAwesomeIcon icon={faTwitter} className="mx-4 w-7 h-7" />
                            <span>+123 456 6789</span>
                        </h5>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    {alert && <Alert type={alert.type} text={alert.text} />}
                    <form onSubmit={handleSubmit} className="main-form" id="contact-us-form">
                        <div className="col-12">
                            <div className="row g-3 mb-1">
                                <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-delay="200">
                                    <input  placeholder="name" type="text"
                                            id="name" name="name"
                                            className="text-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                    />
                                </div>
                                <div className="col-lg-6 col-12" data-aos="fade-left" data-aos-delay="200">
                                    <input placeholder="subject" type="text" id="subject" name="subject"
                                           className="text-input"
                                           value={formData.subject}
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-delay="250">
                            <input placeholder="email" type="email"
                                   id="email" name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   className="text-input my-2"
                            />
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                            <textarea placeholder="message" className="text-input my-2" rows={7} cols={30} id="message"
                                name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-delay="350">
                            <button type="submit" value="Submit" className="btn">send now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}