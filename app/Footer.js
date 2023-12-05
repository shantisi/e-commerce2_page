import React from 'react';
const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="col-md-3">
                        <h4 class="footer-heading">Funda E-Commerce</h4>
                        <div class="footer-underline"></div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Quick Links</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><a href="#" className="text-black">Home</a></div>
                        <div className="mb-2"><a href="#" className="text-black">About Us</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Contact Us</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Blogs</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Sitemaps</a></div>                  
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Shop Now</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><a href="#" className="text-black">Collections</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Trending Products</a></div>
                        <div className="mb-2"><a href="#" className="text-black">New Arrivals Products</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Featured Products</a></div>
                        <div className="mb-2"><a href="#" className="text-black">Cart</a></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Reach Us</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2">
                            <p>
                                <i className="fa fa-map-marker"></i> #444, some main road, some area, some street, bangalore, india - 560077
                            </p>
                        </div>
                        <div className="mb-2">
                            <a href="tel:+91888XXXXXXX" className="text-black">
                                <i className="fa fa-phone"></i> +91 888-XXX-XXXX
                            </a>
                        </div>
                        <div className="mb-2">
                            <a href="mailto:fundaofwebit@gmail.com" className="text-black">
                                <i className="fa fa-envelope"></i> fundaofwebit@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <a href="mailto:fundaofwebit@gmail.com" className="text-black">
                            <i className="fa fa-envelope"></i> Clothing best apparels online store
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

