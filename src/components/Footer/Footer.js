import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="w-full text-slate-500">
                {/*      <!-- Main footer --> */}
                <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-product-4-sub"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-product-4-sub"
                                >
                                    Home
                                </h3>
                                <ul>
                                    <Link to='/'>Home</Link>
                                    <Link></Link>
                                    <Link></Link>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-docs-4-sub"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-docs-4-sub"
                                >
                                    Services
                                </h3>
                                <ul>
                                <Link to='/services'>Services</Link>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-about-4-sub"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-about-4-sub"
                                >
                                    Registration
                                </h3>
                                <ul>
                                     <Link to='/signup'>Signup</Link><br />
                                     <Link to='/login'>Login</Link>

                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-get-in-touch-4-sub"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-get-in-touch-4-sub"
                                >
                                    Blogs
                                </h3>
                                <ul>
                                    <Link to='/blogs'>Blogs</Link>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/*      <!-- Sub Footer --> */}
                <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <Link
                                id="WindUI"
                                aria-label="Brad's law Firm"
                                aria-current="page"
                                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                                to="/"
                            >
                                <img src='https://i.ibb.co/FhSNbDP/tax-icon-15116.png'
                                    width="300"
                                    height="300"
                                    className="h-8 w-8"
                                    alt=''
                                />
                                Brad's Law
                            </Link>
                            <nav
                                className="col-span-3 md:col-span-4 lg:col-span-6"
                                aria-labelledby="subfooter-links-3-sub"
                            >
                                <h3 className="sr-only" id="subfooter-links-3-sub">
                                    Get in touch
                                </h3>
                                <span className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">Copyright@2022
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;