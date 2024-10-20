

export default function ProductItem(){
    return (
        <div className="col-md-4 col-sm-6">

            <div className="product-item">
                <figure className="product-thumb">
                    <a href="product-details.html">
                        <img className="pri-img" src="assets/img/product/product-1.jpg"
                             alt="product"/>
                        <img className="sec-img"
                             src="assets/img/product/product-18.jpg" alt="product"/>
                    </a>
                    <div className="product-badge">
                        <div className="product-label new">
                            <span>new</span>
                        </div>
                        <div className="product-label discount">
                            <span>10%</span>
                        </div>
                    </div>
                    <div className="button-group">
                        <a href="wishlist.html" data-bs-toggle="tooltip"
                           data-bs-placement="left" title="Add to wishlist"><i
                            className="pe-7s-like"></i></a>
                        <a href="compare.html" data-bs-toggle="tooltip"
                           data-bs-placement="left" title="Add to Compare"><i
                            className="pe-7s-refresh-2"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                            data-bs-toggle="tooltip" data-bs-placement="left"
                            title="Quick View"><i
                            className="pe-7s-search"></i></span></a>
                    </div>
                    <div className="cart-hover">
                        <button className="btn btn-cart">add to cart</button>
                    </div>
                </figure>
                <div className="product-caption text-center">
                    <div className="product-identity">
                        <p className="manufacturer-name"><a
                            href="product-details.html">Platinum</a></p>
                    </div>
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
                    <h6 className="product-name">
                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                    </h6>
                    <div className="price-box">
                        <span className="price-regular">$60.00</span>
                        <span className="price-old"><del>$70.00</del></span>
                    </div>
                </div>
            </div>

            <div className="product-list-item">
                <figure className="product-thumb">
                    <a href="product-details.html">
                        <img className="pri-img" src="assets/img/product/product-1.jpg"
                             alt="product"/>
                        <img className="sec-img"
                             src="assets/img/product/product-18.jpg" alt="product"/>
                    </a>
                    <div className="product-badge">
                        <div className="product-label new">
                            <span>new</span>
                        </div>
                        <div className="product-label discount">
                            <span>10%</span>
                        </div>
                    </div>
                    <div className="button-group">
                        <a href="wishlist.html" data-bs-toggle="tooltip"
                           data-bs-placement="left" title="Add to wishlist"><i
                            className="pe-7s-like"></i></a>
                        <a href="compare.html" data-bs-toggle="tooltip"
                           data-bs-placement="left" title="Add to Compare"><i
                            className="pe-7s-refresh-2"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                            data-bs-toggle="tooltip" data-bs-placement="left"
                            title="Quick View"><i
                            className="pe-7s-search"></i></span></a>
                    </div>
                    <div className="cart-hover">
                        <button className="btn btn-cart">add to cart</button>
                    </div>
                </figure>
                <div className="product-content-list">
                    <div className="manufacturer-name">
                        <a href="product-details.html">Platinum</a>
                    </div>
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

                    <h5 className="product-name"><a href="product-details.html">Perfect
                        Diamond Jewelry</a></h5>
                    <div className="price-box">
                        <span className="price-regular">$50.00</span>
                        <span className="price-old"><del>$29.99</del></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                        perspiciatis
                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                        corporis ullam
                        rem, accusantium adipisci officia eaque.</p>
                </div>
            </div>

        </div>
    );
}