import {faArrowRight, faBug, faBullhorn, faCode, faPalette, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {faAndroid} from "@fortawesome/free-brands-svg-icons";


export default function HomeServices(){
    return (
        <section className="container services py-5" id="services">
            <div className="heading">
      <span className="pretitle" data-aos="fade-up">
        our services
      </span>
                <h2 className="title col-lg-10 col-12" data-aos="fade-up" data-aos-delay="100">
                    What We’re Offering?
                </h2>
                <p className="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>
            <div className="row gy-4 gx-4 ">
                <div className="col-md-6 col-12 col-lg-4 mx-auto ">
                    <div className="box box-service box-hover group hover:text-white" data-aos="fade-right" data-aos-delay="250">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faCode} className="w-16 h-16 text-green-600 group-hover:text-white" />
                        </div>
                        <h2 className="title-2 my-2 ">web developement</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 mx-auto" data-aos="fade-down" data-aos-delay="200">
                    <div className="box box-service box-hover group hover:text-white">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faBullhorn} className="w-16 h-16 text-green-600 group-hover:text-white"/>
                        </div>
                        <h2 className="title-2 my-2 ">digital marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mx-auto" data-aos="fade-left" data-aos-delay="250">
                    <div className="box box-service box-hover group hover:text-white">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faSearch} className="w-16 h-16 text-green-600 group-hover:text-white"/>
                        </div>
                        <h2 className="title-2 my-2 ">SEO Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 mx-auto" data-aos="fade-right" data-aos-delay="350">
                    <div className="box box-service box-hover group hover:text-white">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faBug} className="w-16 h-16 text-green-600 group-hover:text-white"/>
                        </div>
                        <h2 className="title-2 my-2 ">cyber security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className="box  box-service box-hover group hover:text-white">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faPalette} className="w-16 h-16 text-green-600 group-hover:text-white"/>
                        </div>
                        <h2 className="title-2 my-2 ">graphic design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" col-md-6  col-lg-4 mx-auto ">
                    <div className="box box-service box-hover group hover:text-white" data-aos="fade-left" data-aos-delay="350">
                        <div className="box-icon my-2">
                            <FontAwesomeIcon icon={faAndroid} className="w-16 h-16 text-green-600 group-hover:text-white"/>
                        </div>
                        <h2 className="title-2 my-2 ">apps developement</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde, exped
                            ita nesciunt quibusdam quis tempore quas tenetur</p>
                        <Link
                            href="service-single.html"
                            className="my-2 learn-more flex items-center"
                        >
                            <span>learn more</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-4 h-4 ml-2 align-middle"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}