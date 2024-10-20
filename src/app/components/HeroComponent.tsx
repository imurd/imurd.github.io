import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faMoon} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function HeroComponent(){
    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center" id="hero">
            <div id="particles-js"></div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="hero-text col-12 col-lg-5">
                        <div className="row">
                            <div className="hero-icons d-flex gap-lg-3 gap-2 my-lg-3 my-2" data-aos="fade-up"
                                 data-aos-delay="100">
                                <Link href="#" className="group transition-colors duration-300 hover:text-white">
                                    <FontAwesomeIcon icon={faFacebook} className="text-gray-600 w-6 h-6 hover:text-white transition-colors duration-300 group-hover:text-white"  />
                                </Link>
                                <Link href="#" className="group hover:text-white transition-colors duration-300">
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-600 w-6 h-6 hover:text-white transition-colors duration-300 group-hover:text-white"  />
                                </Link>
                                <Link href="#" className="group hover:text-white transition-colors duration-300 ">
                                    <FontAwesomeIcon icon={faTwitter} className="text-gray-600 w-6 h-6 hover:text-white transition-colors duration-300 group-hover:text-white"  />
                                </Link>
                                <Link href="#" className="group hover:text-white transition-colors duration-300">
                                    <FontAwesomeIcon icon={faYoutube} className="text-gray-600 w-6 h-6 hover:text-white transition-colors duration-300 group-hover:text-white"  />
                                </Link>
                            </div>
                            <div className="col-12 ">
                                <h2 className="title col-12" data-aos="fade-up" data-aos-delay="150">Excellent IT <span
                                    className="unique-text">solutions</span> for your success </h2>
                            </div>
                            <div className="col-lg-10 col-12" data-aos="fade-up" data-aos-delay="200">
                                <p>
                                    At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet,
                                    quod doloribus
                                    the framework of the essence represents a bond between the flexible
                                    production planning
                                </p>
                            </div>
                            <div className="col-10" data-aos="fade-up" data-aos-delay="250">
                                <a href="#" className="btn">join now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 mx-md-auto text-center" data-aos="fade-left" data-aos-delay="100">
                        <div className="hero-image">
                            <div className="hero-img" data-tilt>
                                <img className="img-fluid " alt="hero-img"
                                     // src="images/hero/bodigmas_IT_solutions_company_illustrationvectorflat_designmini_942ad818-e3f4-47af-a5e8-78e030aff9c9-removebg.png"/>
                                     src="../../../static/images/hero/bodigmas_IT_solutions_company_illustrationvectorflat_designmini_942ad818-e3f4-47af-a5e8-78e030aff9c9-removebg.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}