
import Footer from "@/app/components/Footer";
import ProductItem from "@/app/[locale]/shop/ProductItem";
import TheHeader from "@/app/components/TheHeader";


export default function ShopPage(){
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
                                            <li className="breadcrumb-item active" aria-current="page">shop</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-main-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                <aside className="sidebar-wrapper">
                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">categories</h5>
                                        <div className="sidebar-body">
                                            <ul className="shop-categories">
                                                <li><a href="#">fashionware <span>(10)</span></a></li>
                                                <li><a href="#">kitchenware <span>(5)</span></a></li>
                                                <li><a href="#">electronics <span>(8)</span></a></li>
                                                <li><a href="#">accessories <span>(4)</span></a></li>
                                                <li><a href="#">shoe <span>(5)</span></a></li>
                                                <li><a href="#">toys <span>(2)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">price</h5>
                                        <div className="sidebar-body">
                                            <div className="price-range-wrap">
                                                <div className="price-range" data-min="1" data-max="1000"></div>
                                                <div className="range-slider">
                                                    <form action="#"
                                                          className="d-flex align-items-center justify-content-between">
                                                        <div className="price-input">
                                                            <label htmlFor="amount">Price: </label>
                                                            <input type="text" id="amount"/>
                                                        </div>
                                                        <button className="filter-btn">filter</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">color</h5>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck12"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck12">black (20)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck13"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck13">red (6)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck14"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck14">blue (8)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck11"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck11">green (5)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck15"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck15">pink (4)</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">size</h5>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck111"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck111">S (4)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck222"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck222">M (5)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck333"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck333">L (7)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck444"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck444">XL (3)</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-banner">
                                        <div className="img-container">
                                            <a href="#">
                                                <img src="assets/img/banner/sidebar-banner.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>

                                </aside>
                            </div>

                            <div className="col-lg-9 order-1 order-lg-2">
                                <div className="shop-product-wrapper">
                                    <div className="shop-top-bar">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-md-6 order-2 order-md-1">
                                                <div className="top-bar-left">
                                                    <div className="product-view-mode">
                                                        <a className="active" href="#" data-target="grid-view"
                                                           data-bs-toggle="tooltip" title="Grid View"><i
                                                            className="fa fa-th"></i></a>
                                                        <a href="#" data-target="list-view" data-bs-toggle="tooltip"
                                                           title="List View"><i className="fa fa-list"></i></a>
                                                    </div>
                                                    <div className="product-amount">
                                                        <p>Showing 1–16 of 21 results</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 order-1 order-md-2">
                                                <div className="top-bar-right">
                                                    <div className="product-short">
                                                        <p>Sort By : </p>
                                                        <select className="nice-select" name="sortby">
                                                            <option value="trending">Relevance</option>
                                                            <option value="sales">Name (A - Z)</option>
                                                            <option value="sales">Name (Z - A)</option>
                                                            <option value="rating">Price (Low &gt; High)</option>
                                                            <option value="date">Rating (Lowest)</option>
                                                            <option value="price-asc">Model (A - Z)</option>
                                                            <option value="price-asc">Model (Z - A)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shop-product-wrap grid-view row mbn-30">
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>


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