
import React, { useContext } from "react";
import { Footer, NavBar } from "./index.js";
import styles from "../style.js";
import { CartContext } from "../context/CartContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { resolveAssetImage } from "../assets/index.js";

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const navigate = useNavigate();

    const handleIncrement = (id) => {
        dispatch({ type: "Increment", id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: "Decrement", id });
    };

    const handleSizeChange = (id, size, price) => {
        dispatch({
            type: "UpdateSize",
            id,
            size,
            price,
        });
    };

    const handleClick = () => {
        navigate("/details");
    };

    return (
        <div>
            <div className={`min-h-screen bg-paper text-ink ${styles.paddingX} ${styles.flexCenter}`}>
                <div id="cart" className={styles.boxWidth}>
                    <NavBar />

                    <div className={styles.paddingY}>
                        <h1 className="font-sans text-3xl font-extrabold text-ink">
                            Shopping Cart
                        </h1>

                        <div className="mt-8 w-full space-y-4">

                            {cart.map((img) => (
                                <ul
                                    key={img.id}
                                    className="grid grid-cols-2 items-center gap-6 rounded-lg border border-neutral-200 bg-white p-4 font-sans text-ink shadow-sm sm:grid-cols-12"
                                >
                                    {/* Product Image */}
                                    <li className="sm:col-span-2">
                                        <img
                                            src={resolveAssetImage(img.link)}
                                            alt={img.title}
                                            className="h-28 w-full rounded-md object-cover"
                                        />
                                    </li>

                                    {/* Product Details */}
                                    <li className="sm:col-span-4">
                                        <p className="font-semibold">
                                            {img.title}
                                        </p>

                                        {/* Size Selector */}
                                        {img.sizes && (
                                            <div className="mt-3">
                                                <label className="mb-2 block text-xs text-neutral-500">
                                                    Select Size
                                                </label>

                                                <select
                                                    value={img.selectedSize || img.sizes[0]}
                                                    onChange={(e) => {
                                                        const size = e.target.value;

                                                        handleSizeChange(
                                                            img.id,
                                                            size,
                                                            img.priceBySize[size]
                                                        );
                                                    }}
                                                    className="w-full max-w-[150px] rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
                                                >
                                                    {img.sizes.map((size) => (
                                                        <option key={size} value={size}>
                                                            {size} - ₹{img.priceBySize[size]}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                    </li>

                                    {/* Quantity */}
                                    <li className="flex items-center justify-center sm:col-span-3">
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                className="rounded border border-neutral-300 px-3 py-1 text-xl hover:bg-neutral-100"
                                                onClick={() => handleDecrement(img.id)}
                                            >
                                                -
                                            </button>

                                            <span className="min-w-[1.5rem] px-2 text-center text-xl font-bold">
                                                {img.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                className="rounded border border-neutral-300 px-3 py-1 text-xl hover:bg-neutral-100"
                                                onClick={() => handleIncrement(img.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </li>

                                    {/* Price */}
                                    <li className="flex items-center justify-center sm:col-span-3">
                                        <span className="text-xl font-bold text-yellow-700">
                                            ₹{img.price * img.quantity}
                                        </span>
                                    </li>
                                </ul>
                            ))}

                            {/* Cart Total */}
                            <div>
                                <ul className="mt-8 grid list-none grid-cols-2 gap-6 rounded-lg border border-neutral-200 bg-white p-5 font-sans text-ink shadow-sm sm:grid-cols-12">
                                    <li className="text-lg font-bold sm:col-start-9 sm:col-span-2">
                                        Total Items: {totalItems}
                                    </li>

                                    <li className="text-lg font-bold sm:col-start-11 sm:col-span-2">
                                        Total Sum: ₹{totalPrice}
                                    </li>
                                </ul>
                            </div>

                            {/* Checkout */}
                            <div className={`grid sm:grid-cols-4 ${styles.marginY}`}>
                                <button
                                    type="button"
                                    className="border border-[#403d38] bg-[#403d38] px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#f6f3ee] transition hover:bg-transparent hover:text-[#403d38]"
                                    onClick={handleClick}
                                >
                                    Checkout
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
