
import { images } from "../constants/index.js";
import { NavBar } from "../components/index.js";
import styles from "../style.js";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContextProvider.jsx";
import { resolveAssetImage } from "../assets/index.js";

const Item = () => {
    const { imageId } = useParams();
    const image = images.find((img) => String(img.id) === imageId);

    const { dispatch } = useContext(CartContext);

    const [selectedSize, setSelectedSize] = useState(
        image?.sizes?.[0] ?? ""
    );

    const [isUnitOpen, setIsUnitOpen] = useState(false);
    const [useCustomSize, setUseCustomSize] = useState(false);
    const [customSize, setCustomSize] = useState("");
    const [customUnit, setCustomUnit] = useState("g");

    if (!image) {
        return null;
    }

    // Calculate price per gram using the first available package size
    const getPricePerGram = () => {
        const firstSize = image.sizes[0];
        const firstSizeInGrams =
            firstSize === "1kg"
                ? 1000
                : firstSize === "500g"
                ? 500
                : firstSize === "250g"
                ? 250
                : 100;

        return image.priceBySize[firstSize] / firstSizeInGrams;
    };

    // Calculate custom quantity in grams
    const customQuantityInGrams =
        Number(customSize) * (customUnit === "kg" ? 1000 : 1);

    // Calculate custom price
    const customPrice =
        customQuantityInGrams > 0
            ? Math.round(getPricePerGram() * customQuantityInGrams)
            : 0;

    // Final selected size and price
    const finalSize = useCustomSize
        ? `${customSize}${customUnit}`
        : selectedSize;

    const selectedPrice = useCustomSize
        ? customPrice
        : image.priceBySize[selectedSize];

    // Add item to cart
    const handleAddToCart = () => {
        if (useCustomSize && (!customSize || Number(customSize) <= 0)) {
            alert("Please enter a valid custom quantity.");
            return;
        }

        const itemForCart = {
            ...image,
            id: `${image.id}-${finalSize}`,
            originalId: image.id,
            selectedSize: finalSize,
            price: selectedPrice,
            quantity: 1
        };

        dispatch({
            type: "Add",
            image: itemForCart
        });
    };

    return (
        <div className="min-h-screen bg-ivory">

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b border-[#d8d1c7] bg-[#f6f3ee]/95 backdrop-blur">
                <NavBar />
            </header>

            <main className="relative isolate min-h-[calc(100vh-57px)]">

                {/* Background image with blur */}
                <div
                    className="absolute inset-0 -z-10 scale-105 bg-[url(./assets/background.png)] bg-cover bg-center blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 -z-10 bg-[#27251f]/55" />

                <div
                    id="image"
                    className="relative mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20"
                />

                <div
                    id="image"
                    className="relative mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20"
                >

                    <div className={`grid grid-cols-4 gap-6 sm:grid-cols-12 ${styles.paddingY}`}>

                        {/* Product Image */}
                        <div className="col-span-4 justify-center flex flex-col space-y-8 text-4xl text-white sm:col-span-4">
                            <img
                                src={resolveAssetImage(image.link)}
                                alt={image.title}
                                className="max-h-[560px] w-full object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div
                            id="itemdetails"
                            className="col-span-4 m-0 mt-0 flex h-[560px] flex-col justify-center space-y-4 list-none text-white sm:col-span-8 sm:mt-10 sm:p-10"
                        >

                            <li className="text-4xl">
                                {image.title}
                            </li>

                            {image.content && (
                                <li className="text-lg font-thin italic">
                                    {image.content}
                                </li>
                            )}

                            {/* Price */}
                            <li className="text-xl font-medium">
                                Rs. {selectedPrice}
                            </li>

                            <li className="text-sm leading-relaxed">
                                <span className="font-semibold">
                                    Expiry:
                                </span>{" "}
                                {image.expiry}
                            </li>

                            {/* Size Selector */}
                            <li className="flex flex-col gap-3 text-sm">

                                <span className="font-semibold">
                                    Size
                                </span>

                                {/* Predefined Sizes */}
                                <div
                                    className="flex flex-wrap gap-2"
                                    role="group"
                                    aria-label="Choose package size"
                                >
                                    {image.sizes.map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => {
                                                setSelectedSize(size);
                                                setUseCustomSize(false);
                                            }}
                                            aria-pressed={
                                                !useCustomSize &&
                                                selectedSize === size
                                            }
                                            className={`border px-3 py-2 text-xs font-semibold transition ${
                                                !useCustomSize &&
                                                selectedSize === size
                                                    ? "border-white bg-white text-[#403d38]"
                                                    : "border-white/60 text-white hover:border-white"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom Size Button */}
                                <button
                                    type="button"
                                    onClick={() => setUseCustomSize(true)}
                                    aria-pressed={useCustomSize}
                                    className={`w-fit border px-4 py-2 text-xs font-semibold transition ${
                                        useCustomSize
                                            ? "border-white bg-white text-[#403d38]"
                                            : "border-white/60 text-white hover:border-white"
                                    }`}
                                >
                                    + Custom Size
                                </button>

                                {/* Custom Size Input */}
                                {useCustomSize && (
                                    <div className="flex max-w-sm items-center gap-3 pt-2 py-2">

                                        <input
                                            type="number"
                                            min="1"
                                            step="any"
                                            placeholder="Enter quantity"
                                            value={customSize}
                                            onChange={(e) => {
                                                setCustomSize(e.target.value);
                                            }}
                                            className="w-full border border-white/60 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
                                        />

                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsUnitOpen(!isUnitOpen)}
                                                className="flex min-w-[105px] items-center justify-between gap-4 border border-white/60 bg-[#403d38] px-4 py-3.5 text-sm text-white transition hover:border-white"
                                            >
                                                <span>{customUnit === "g" ? "Gms" : "Kg"}</span>

                                                <svg
                                                    className={`h-4 w-4 transition-transform duration-200 ${
                                                        isUnitOpen ? "rotate-180" : ""
                                                    }`}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                >
                                                    <path d="m5 7 5 5 5-5" />
                                                </svg>
                                            </button>

                                            {isUnitOpen && (
                                                <div className="absolute right-0 top-full z-50 mt-1 min-w-full border border-[#d8d1c7] bg-[#403d38] shadow-lg">

                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setCustomUnit("g");
                                                            setIsUnitOpen(false);
                                                        }}
                                                        className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                                                            customUnit === "g" ? "bg-white/10 text-white" : "text-[#d9d3c9]"
                                                        }`}
                                                    >
                                                        Gms
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setCustomUnit("kg");
                                                            setIsUnitOpen(false);
                                                        }}
                                                        className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                                                            customUnit === "kg" ? "bg-white/10 text-white" : "text-[#d9d3c9]"
                                                        }`}
                                                    >
                                                        Kg
                                                    </button>
                                                </div>
                                            )}
                                            </div>
                                    </div>
                                )}

                                {/* Custom Size Price */}
                                {useCustomSize && customQuantityInGrams > 0 && (
                                    <p className="text-sm font-medium text-white">
                                        Custom Size: {customSize} {customUnit}
                                        {" "} | Price: Rs. {customPrice}
                                    </p>
                                )}

                            </li>

                            {/* Add to Cart */}
                            <button
                                onClick={handleAddToCart}
                                type="button"
                                disabled={useCustomSize && (!customSize || Number(customSize) <= 0)}
                                className="mt-3 w-fit border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#403d38] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Item;
