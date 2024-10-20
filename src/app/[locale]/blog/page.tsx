import Footer from "@/app/components/Footer";
import BlogItem from "@/app/[locale]/blog/BlogItem";
import TheHeader from "@/app/components/TheHeader";


export default function BlogPage(){
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
                                            <li className="breadcrumb-item active" aria-current="page">blog list left
                                                sidebar
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-main-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                <aside className="blog-sidebar-wrapper">
                                    <div className="blog-sidebar">
                                        <h5 className="title">search</h5>
                                        <div className="sidebar-serch-form">
                                            <form action="#">
                                                <input type="text" className="search-field" placeholder="search here"/>
                                                    <button type="submit" className="search-btn"><i
                                                        className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="blog-sidebar">
                                        <h5 className="title">categories</h5>
                                        <ul className="blog-archive blog-category">
                                            <li><a href="#">Barber (10)</a></li>
                                            <li><a href="#">fashion (08)</a></li>
                                            <li><a href="#">handbag (07)</a></li>
                                            <li><a href="#">Jewelry (14)</a></li>
                                            <li><a href="#">food (10)</a></li>
                                        </ul>
                                    </div>

                                    <div className="blog-sidebar">
                                        <h5 className="title">Blog Archives</h5>
                                        <ul className="blog-archive">
                                            <li><a href="#">January (10)</a></li>
                                            <li><a href="#">February (08)</a></li>
                                            <li><a href="#">March (07)</a></li>
                                            <li><a href="#">April (14)</a></li>
                                            <li><a href="#">May (10)</a></li>
                                        </ul>
                                    </div>

                                    <div className="blog-sidebar">
                                        <h5 className="title">recent post</h5>
                                        <div className="recent-post">
                                            <div className="recent-post-item">
                                                <figure className="product-thumb">
                                                    <a href="blog-details.html">
                                                        <img src="assets/img/blog/blog-img1.jpg" alt="blog image"/>
                                                    </a>
                                                </figure>
                                                <div className="recent-post-description">
                                                    <div className="product-name">
                                                        <h6><a href="blog-details.html">Auctor gravida enim</a></h6>
                                                        <p>march 10 2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recent-post-item">
                                                <figure className="product-thumb">
                                                    <a href="blog-details.html">
                                                        <img src="assets/img/blog/blog-img2.jpg" alt="blog image"/>
                                                    </a>
                                                </figure>
                                                <div className="recent-post-description">
                                                    <div className="product-name">
                                                        <h6><a href="blog-details.html">gravida auctor dnim</a></h6>
                                                        <p>march 18 2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recent-post-item">
                                                <figure className="product-thumb">
                                                    <a href="blog-details.html">
                                                        <img src="assets/img/blog/blog-img3.jpg" alt="blog image"/>
                                                    </a>
                                                </figure>
                                                <div className="recent-post-description">
                                                    <div className="product-name">
                                                        <h6><a href="blog-details.html">enim auctor gravida</a></h6>
                                                        <p>march 14 2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </aside>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                <div className="blog-item-wrapper blog-list-inner">

                                    <div className="row mbn-30">
                                        <BlogItem/>
                                        <BlogItem/>
                                        <BlogItem/>
                                        <BlogItem/>
                                        <BlogItem/>
                                    </div>

                                    <div className="paginatoin-area text-center">
                                        <ul className="pagination-box">
                                            <li><a className="previous" href="#"><i
                                                className="pe-7s-angle-left"></i></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a>
                                            </li>
                                        </ul>
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