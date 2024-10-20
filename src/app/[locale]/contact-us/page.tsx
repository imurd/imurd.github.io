import Footer from "@/app/components/Footer";
import TheHeader from "@/app/components/TheHeader";


export default function ContactPage(){
    return (
        <>
            <TheHeader/>
            <main>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrap">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i
                                                className="fa fa-home"></i></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-area section-padding pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-message">
                                    <h4 className="contact-title">Tell Us Your Project</h4>
                                    <form id="contact-form" className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="first_name" placeholder="Name *" type="text" required/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="phone" placeholder="Phone *" type="text" required/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="email_address" placeholder="Email *" type="text" required/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="contact_subject" placeholder="Subject *" type="text"/>
                                            </div>
                                            <div className="col-12">
                                                <div className="contact2-textarea text-center">
                                                    <textarea placeholder="Message *" name="message"
                                                              className="form-control2" required></textarea>
                                                </div>
                                                <div className="contact-btn">
                                                    <button className="btn btn-sqr" type="submit">Send Message</button>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <p className="form-messege"></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-info">
                                    <h4 className="contact-title">Contact Us</h4>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                        lectorum. Mirum
                                        est notare quam littera gothica, quam nunc putamus parum claram anteposuerit
                                        litterarum
                                        formas human.</p>
                                    <ul>
                                        <li><i className="fa fa-fax"></i> Address : No 40 Baria Sreet 133/2 NewYork City
                                        </li>
                                        <li><i className="fa fa-phone"></i> E-mail: info@yourdomain.com</li>
                                        <li><i className="fa fa-envelope-o"></i> +88013245657</li>
                                    </ul>
                                    <div className="working-time">
                                        <h6>Working Hours</h6>
                                        <p><span>Monday – Saturday:</span>08AM – 22PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}