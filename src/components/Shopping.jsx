import { AnnouncementBar, Footer, NavBar } from "./index.js";
import { products, categories } from "../constants/index.js";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const navigate = useNavigate();
    const handleViewProduct = () => {
        navigate(`/item/${product.id}`, {
            state: {
                product,
                selectedSize
            }
        });
    };

    return (
        <div className="group min-w-0">

            {/* Product Image */}
            <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-xl bg-[#f1ede6]">

                {product.isNew && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#27251f] px-3 py-1 text-xs text-white">
                        New Launch
                    </span>
                )}

                <img
                    src={product.link}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className="pt-4">

                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-base font-medium text-[#27251f]">
                            {product.title}
                        </h3>

                        <p className="mt-1 text-xs text-[#82796d]">
                            {product.category}
                        </p>
                    </div>

                    <p className="shrink-0 text-lg font-semibold text-[#27251f]">
                        ₹{product.priceBySize[selectedSize]}
                    </p>
                </div>

                {/* Size Selector */}
                <div className="mt-4">
                    <p className="mb-2 text-xs text-[#82796d]">
                        Select Size
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`rounded-full border px-4 py-1.5 text-xs transition-all duration-300 ${
                                    selectedSize === size
                                        ? "border-[#27251f] bg-[#27251f] text-white"
                                        : "border-[#d8d1c7] text-[#514a41] hover:border-[#27251f]"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                
                <p className="shrink-0 text-lg font-semibold text-[#27251f] pt-4">Custom size available</p>

                <button
                    onClick={handleViewProduct}
                    className="mt-5 w-full rounded-full border border-[#d8d1c7] py-2.5 text-sm text-[#27251f] transition-all duration-300 hover:bg-[#27251f] hover:text-white"
                >
                    View Product
                </button>

            </div>
        </div>
    );
};

const Shopping = () => {

    

    const [search, setSearch] = useState("");

    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(
        location.state?.selectedCategory || "All"
    );
    const [showAll, setShowAll] = useState(false);

    const scrollToProducts = () => {
        setTimeout(() => {
            document
                .getElementById("shopCategory")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    // Runs when arriving from another page (e.g. Features) with a category
    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
            setShowAll(false);
            scrollToProducts();
        }
    }, [location.state]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const newLaunches = products.filter(
        (product) => product.newLaunch === true
    );

    const displayedProducts = showAll
        ? filteredProducts
        : filteredProducts.slice(0, 6);

    return (
        <div className="min-h-screen bg-ivory">

            <AnnouncementBar />

            <header className="sticky top-0 z-50 w-full border-b border-[#d8d1c7] bg-[#f6f3ee]/95 backdrop-blur">
                <NavBar />
            </header>

            <main className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">

                {/* Search Bar */}
                <section className="flex justify-center pt-10 pb-5 sm:py-7 sm:pt-10">
                    <div className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-[#d8d1c7] bg-[#f6f3ee] px-6 py-3.5">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#82796d]"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search for your favourite products..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setShowAll(false);
                            }}
                            className="w-full bg-transparent text-sm text-[#27251f] outline-none placeholder:text-[#a49b90]"
                        />
                    </div>
                </section>

                {/* New Launch */}
                <section className="pb-16 sm:pb-24">

                    <div className="mb-8">
                        <h2 className="text-2xl font-medium text-[#27251f] sm:text-3xl">
                            New Launch
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

                        {newLaunches.length > 0 ? (
                            newLaunches.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <p className="col-span-full py-8 text-center text-sm text-[#82796d]">
                                No new launches found.
                            </p>
                        )}

                    </div>
                </section>

                {/* Shop by Category */}
                <section id="shopCategory" className="scroll-mt-24 pb-4 sm:pb-8">
                    <div className="mb-7">
                        <h1 className="text-2xl font-medium text-[#27251f] sm:text-3xl">
                            Shop by Category
                        </h1>
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(
                                        selectedCategory === category ? "All" : category
                                    );
                                    setShowAll(false);
                                    scrollToProducts();
                                }}
                                className={`shrink-0 rounded-full border px-6 py-3 text-sm transition-all duration-300 ${
                                    selectedCategory === category
                                        ? "border-[#27251f] bg-[#27251f] text-white"
                                        : "border-[#d8d1c7] text-[#514a41] hover:bg-[#27251f] hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                </section>

                {/* All Products */}
                <section className="pb-20 sm:pb-28">

                    <div className="mb-8">
                        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#82796d]">
                            Made with care
                        </p>

                        <h2 className="text-2xl font-medium text-[#27251f] sm:text-3xl">
                            All Products
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <p className="col-span-full py-12 text-center text-[#82796d]">
                                No products found. Try another search.
                            </p>
                        )}

                    </div>

                    {filteredProducts.length > 6 && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="rounded-full border border-[#27251f] px-10 py-3 text-sm text-[#27251f] transition-all duration-300 hover:bg-[#27251f] hover:text-white"
                            >
                                {showAll
                                    ? "Show Less"
                                    : "View all products"}
                            </button>
                        </div>
                    )}

                </section>
            
            </main>
            <Footer/>
        </div>
    );
};

export default Shopping;
