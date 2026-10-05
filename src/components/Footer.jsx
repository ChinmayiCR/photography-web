import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#d8d1c7] bg-[#403d38] px-6 py-12 text-[#f6f3ee] sm:px-12 lg:px-20">
            <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d9d3c9]">Mathrushree Bhavana</p>
                    <p className="editorial-serif mt-3 text-3xl">100% natural homemade goodness.</p>
                </div>
                <p className="text-xs text-[#d9d3c9]">Authentic taste, rich flavour & easy to cook!</p>
            </div>
        </footer>
    );
};

export default Footer;
