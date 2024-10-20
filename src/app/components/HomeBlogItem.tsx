import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function HomeBlogItem(){
    return (
        <div className="col-lg-4 col-md-6 col-12 mx-auto" data-aos="fade-right" data-aos-delay="250">
            <div className="box card border-0">
                <div className="col-12">
                    <img src="../../../static/images/blog/post-images/1.jpg" alt="blog-img"/>
                </div>
                <div className="card-body">
                    <div className="info d-flex justify-content-between">
                        <h3><i className="bi bi-person-fill title-2 mx-2"></i>admin</h3>
                        <h3><i className="bi bi-calendar-date-fill title-2 mx-2"></i>27/05/2024</h3>
                        <h3><i className="bi bi-tag-fill title-2 mx-2"></i>web dev</h3>
                    </div>
                    <h4 className="title-2">
                        how to learn javascript easily with this method
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Explicabo earum id assumenda ad neque recusandae, quasi deleniti
                        voluptatum eos vel quas molestias?</p>
                    <Link className="learn-more" href="blog-single.html">
                        read more
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2 align-middle"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}