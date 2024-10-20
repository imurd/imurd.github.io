import {faInstagram, faTelegram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Footer from "@/app/components/Footer";

export default function SubFooter(){
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-12 col-lg-3 col-md-6 mx-auto my-4">
                        <div
                            className="box d-flex flex-column justify-content-md-start justify-content-lg-start justify-content-center align-items-center align-items-lg-start align-items-md-start">
                            <a href="#" className="logo ">
                                <img className="my-2" src="images/logo/logo.png" alt=""/>
                            </a>
                            <p>Lorem ipsum dolor sit amet
                                aspernatur exercitationem fugiat.</p>
                            <h4 className="my-2">
                                follow us
                            </h4>
                            <div className="social d-flex gap-2">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTelegram} className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column justify-content-md-start justify-content-lg-start justify-content-center align-items-center align-items-lg-start align-items-md-start my-4 gap-3">
                        <h4>site map</h4>
                        <ul className="d-flex flex-column gap-3">
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="index.html">home</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="about.html">about</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="services.html">services</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="contact.html">contact</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column justify-content-md-start justify-content-lg-start justify-content-center align-items-center align-items-lg-start align-items-md-start my-4 gap-3">
                        <h4>follow us</h4>
                        <ul className="d-flex flex-column gap-3">
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">facebook</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">instagram</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">linkedin</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">x</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-12 col-lg-3 col-md-6 mx-auto d-flex flex-column justify-content-md-start justify-content-lg-start justify-content-center align-items-center align-items-lg-start align-items-md-start my-4 gap-3">
                        <h4>our services</h4>
                        <ul className="d-flex flex-column gap-3">
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">digital marketing</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">web developement</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">cyber security</a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">graphic design</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </div>
    );
}