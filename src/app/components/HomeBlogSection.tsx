import HomeBlogItem from "@/app/components/HomeBlogItem";


export default function HomeBlogSection(){
    return (
        <section className="container blog py-5" id="blog">
            <div className="heading">
      <span className="pretitle" data-aos="fade-up">
        blog
      </span>
                <h2 className="title col-12" data-aos="fade-up" data-aos-delay="100">
                    our blog
                </h2>
                <p className="col-lg-7 col-12" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>

            <div className="row  gy-4 gx-4 ">
                <HomeBlogItem/>
                <HomeBlogItem/>
                <HomeBlogItem/>
            </div>
        </section>
    );
}