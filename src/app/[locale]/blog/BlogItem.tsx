

export default function BlogItem(){
    return (
        <div className="col-12">

            <div className="blog-post-item mb-30">
                <figure className="blog-thumb">
                    <a href="blog-details.html">
                        <img src="assets/img/blog/blog-img1.jpg" alt="blog image"/>
                    </a>
                </figure>
                <div className="blog-content">
                    <h4 className="blog-title">
                        <a href="blog-details.html">Celebrity Daughter Opens Up About
                            Having Her Eye Color Changed</a>
                    </h4>
                    <div className="blog-meta">
                        <p>10/04/2019 | <a href="#">Corano</a></p>
                    </div>
                    <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
                        arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
                        Praesent ornare tortor ac ante egestas hendrerit. Aliquam et
                        metus pharetra</p>
                    <a className="blog-read-more" href="blog-details.html">Read
                        More...</a>
                </div>
            </div>

        </div>
    );
}