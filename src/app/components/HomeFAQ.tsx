import FAQItem from "@/app/components/FAQITEM";

export default function HomeFAQ(){
    return (
        <section className="container faq py-5">
            <div className="heading">
      <span className="pretitle" data-aos="fade-up">
        FAQ
      </span>
                <h2 className="title col-12" data-aos="fade-up" data-aos-delay="100">
                    Frequently Asked Questions
                </h2>
                <p className="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>
            <div className="row justify-content-center align-items-center  gx-4 ">
                <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="200" data-tilt>
                    <img src="../../../static/images/faq/customer.png" alt="faq"/>
                </div>
                <div className="col-12 col-lg-6  ">
                    <FAQItem/>
                    <FAQItem/>
                    <FAQItem/>
                    <FAQItem/>
                </div>
            </div>
        </section>
    );
}