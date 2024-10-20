import Footer from "@/app/components/Footer";
// import RelatedProducts from "@/app/components/RelatedProducts";
import TheHeader from "@/app/components/TheHeader";


export default function ProductPage(){
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
                                            <li className="breadcrumb-item"><a href="shop.html">shop</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">product details
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-main-wrapper section-padding pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 order-1 order-lg-2">
                                <div className="product-details-inner">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="product-large-slider">
                                                <div className="pro-large-img img-zoom">
                                                    <img src="assets/img/product/product-details-img1.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src="assets/img/product/product-details-img2.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src="assets/img/product/product-details-img3.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src="assets/img/product/product-details-img4.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src="assets/img/product/product-details-img5.jpg"
                                                         alt="product-details"/>
                                                </div>
                                            </div>
                                            <div className="pro-nav slick-row-10 slick-arrow-style">
                                                <div className="pro-nav-thumb">
                                                    <img src="assets/img/product/product-details-img1.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src="assets/img/product/product-details-img2.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src="assets/img/product/product-details-img3.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src="assets/img/product/product-details-img4.jpg"
                                                         alt="product-details"/>
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src="assets/img/product/product-details-img5.jpg"
                                                         alt="product-details"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="product-details-des">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">HasTech</a>
                                                </div>
                                                <h3 className="product-name">Handmade Golden Necklace Full Family
                                                    Package</h3>
                                                <div className="ratings d-flex">
                                                    <span><i className="fa fa-star-o"></i></span>
                                                    <span><i className="fa fa-star-o"></i></span>
                                                    <span><i className="fa fa-star-o"></i></span>
                                                    <span><i className="fa fa-star-o"></i></span>
                                                    <span><i className="fa fa-star-o"></i></span>
                                                    <div className="pro-review">
                                                        <span>1 Reviews</span>
                                                    </div>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-regular">$70.00</span>
                                                    <span className="price-old"><del>$90.00</del></span>
                                                </div>
                                                <h5 className="offer-text"><strong>Hurry up</strong>! offer ends in:
                                                </h5>
                                                <div className="product-countdown" data-countdown="2022/12/20"></div>
                                                <div className="availability">
                                                    <i className="fa fa-check-circle"></i>
                                                    <span>200 in stock</span>
                                                </div>
                                                <p className="pro-desc">Lorem ipsum dolor sit amet, consetetur
                                                    sadipscing elitr, sed diam nonumy
                                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                    diam
                                                    voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In
                                                    hac
                                                    habitasse platea dictumst.</p>
                                                <div className="quantity-cart-box d-flex align-items-center">
                                                    <h6 className="option-title">qty:</h6>
                                                    <div className="quantity">
                                                        <div className="pro-qty"><input type="text" value="1"/></div>
                                                    </div>
                                                    <div className="action_link">
                                                        <a className="btn btn-cart2" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                                <div className="pro-size">
                                                    <h6 className="option-title">size :</h6>
                                                    <select className="nice-select">
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                    </select>
                                                </div>
                                                <div className="color-option">
                                                    <h6 className="option-title">color :</h6>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="useful-links">
                                                    <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i
                                                        className="pe-7s-like"></i>wishlist</a>
                                                </div>
                                                <div className="like-icon">
                                                    <a className="facebook" href="#"><i className="fa fa-facebook"></i>like</a>
                                                    <a className="twitter" href="#"><i className="fa fa-twitter"></i>tweet</a>
                                                    <a className="pinterest" href="#"><i
                                                        className="fa fa-pinterest"></i>save</a>
                                                    <a className="google" href="#"><i className="fa fa-google-plus"></i>share</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-details-reviews section-padding pb-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="product-review-info">
                                                <ul className="nav review-tab">
                                                    <li>
                                                        <a className="active" data-bs-toggle="tab"
                                                           href="#tab_one">description</a>
                                                    </li>
                                                    <li>
                                                        <a data-bs-toggle="tab" href="#tab_two">information</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content reviews-tab">
                                                    <div className="tab-pane fade show active" id="tab_one">
                                                        <div className="tab-one">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nam
                                                                fringilla augue nec est tristique auctor. Ipsum metus
                                                                feugiat
                                                                sem, quis fermentum turpis eros eget velit. Donec ac
                                                                tempus
                                                                ante. Fusce ultricies massa massa. Fusce aliquam, purus
                                                                eget
                                                                sagittis vulputate, sapien libero hendrerit est, sed
                                                                commodo
                                                                augue nisi non neque.Cras neque metus, consequat et
                                                                blandit et,
                                                                luctus a nunc. Etiam gravida vehicula tellus, in
                                                                imperdiet
                                                                ligula euismod eget. Pellentesque habitant morbi
                                                                tristique
                                                                senectus et netus et malesuada fames ac turpis egestas.
                                                                Nam
                                                                erat mi, rutrum at sollicitudin rhoncus</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab_two">
                                                        <table className="table table-bordered">
                                                            <tbody>
                                                            <tr>
                                                                <td>color</td>
                                                                <td>black, blue, red</td>
                                                            </tr>
                                                            <tr>
                                                                <td>size</td>
                                                                <td>L, M, S</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<RelatedProducts/>*/}
            </main>
            <Footer/>
        </>
    );
}