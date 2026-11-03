
import React from "react";

const Footer = () => {
    const address =
        "94, 2nd Main Rd, Nanda Kumar Layout, Ramanjaneyanagar, Chikkalasandra, Bengaluru, Karnataka 560061";

    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <footer className="border-t border-[#d8d1c7] bg-[#403d38] text-[#f6f3ee]">

            {/* Main Footer */}
            <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 lg:px-20">

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Information */}
                    <div className="lg:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9d3c9]">
                            MATHRUSHREE BHAVANA
                        </p>

                        <h2 className="editorial-serif mt-5 max-w-md text-2xl leading-relaxed sm:text-3xl">
                            Bringing the authentic taste.
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[#d9d3c9]">
                            Discover traditional flavours, carefully prepared
                            with quality ingredients and a passion for authentic
                            homemade food.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9d3c9]">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-sm text-[#f6f3ee]">
                            <li>
                                <a href="/" className="transition hover:text-[#c9b99f]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/shop" className="transition hover:text-[#c9b99f]">
                                    Our Products
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="transition hover:text-[#c9b99f]">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/#reviews" className="transition hover:text-[#c9b99f]">
                                    Customer Reviews
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Information */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9d3c9]">
                            Customer Care
                        </h3>

                        <ul className="space-y-4 text-sm text-[#f6f3ee]">
                            <li>
                                <a href="/#contactus" className="transition hover:text-[#c9b99f]">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/shop" className="transition hover:text-[#c9b99f]">
                                    Shop Products
                                </a>
                            </li>
                            <li>
                                <a href="/#contactus" className="transition hover:text-[#c9b99f]">
                                    Order Enquiries
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9d3c9]">
                            Visit Us
                        </h3>

                        <div className="flex items-start gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="mt-1 h-5 w-5 shrink-0 text-[#c9b99f]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                                />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>

                            <div>
                                <p className="text-sm leading-7 text-[#d9d3c9]">
                                    {address}
                                </p>

                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f6f3ee] transition hover:text-[#c9b99f]"
                                >
                                    Get Directions
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Brand Promise */}
                <div className="mt-16 border-y border-[#d8d1c7]/30 py-7">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#d9d3c9] sm:text-xs">
                        <span>Authentic Taste</span>
                        <span className="hidden text-[#a99c89] sm:inline">✦</span>
                        <span>Homemade Goodness</span>
                        <span className="hidden text-[#a99c89] sm:inline">✦</span>
                        <span>Quality Ingredients</span>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-[#d9d3c9] sm:flex-row sm:items-center">

                    <p>
                        © {new Date().getFullYear()} Mathrushree Bhavana.
                        All Rights Reserved.
                    </p>

                    <p className="tracking-wide">
                        Made with care, inspired by tradition.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
