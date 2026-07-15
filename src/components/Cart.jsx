import React, {useContext} from 'react';
import {NavBar} from "./index.js";
import styles from "../style.js";
import {CartContext} from "../context/CartContextProvider.jsx";
import {useNavigate} from "react-router-dom";
import {resolveAssetImage} from "../assets/index.js";

const Cart = () => {
    const {cart, dispatch} = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const navigate = useNavigate();

    const handleIncrement = (id) => {
        dispatch({type: "Increment", id});
    };

    const handleDecrement = (id) => {
        dispatch({type: "Decrement", id});
    };

    const handleClick = () => {
        navigate("/details"); // redirect to /about
    };

    return (
        <div className={`min-h-screen bg-paper text-ink ${styles.paddingX} ${styles.flexCenter}`}>
            <div id="cart" className={`${styles.boxWidth}`}>
                <NavBar/>
                <div className={`${styles.paddingY}`}>
                    <h1 className="font-sans text-3xl font-extrabold text-ink">Shopping Cart</h1>
                    <div>
                        <div className="mt-8 w-full space-y-4">
                            {cart.map((img) => (
                                <ul key={img.id} className="grid grid-cols-2 items-center gap-6 rounded-lg border border-neutral-200 bg-white p-4 font-sans text-ink shadow-sm sm:grid-cols-12">
                                    <li
                                        className="sm:col-span-2">
                                        <img src={resolveAssetImage(img.link)} alt={img.title} className="h-28 w-full rounded-md object-cover"/>
                                    </li>
                                    <li
                                        className="font-semibold sm:col-span-6">
                                        {img.title}
                                    </li>
                                    <li
                                        className={`sm:col-span-2 flex items-center justify-center`}>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                className="cursor-pointer rounded border border-neutral-300 bg-white px-3 py-1 text-xl text-ink hover:border-yellow-400 hover:bg-yellow-50"
                                                onClick={() => handleDecrement(img.id)}
                                            >
                                                -
                                            </button>
                                            <span className="min-w-[1.5rem] px-2 text-center text-xl font-bold">{img.quantity}</span>
                                            <button
                                                type="button"
                                                className="cursor-pointer rounded border border-neutral-300 bg-white px-3 py-1 text-xl text-ink hover:border-yellow-400 hover:bg-yellow-50"
                                                onClick={() => handleIncrement(img.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </li>
                                    <li
                                        className={`sm:col-span-2 flex items-center justify-center`}>
                                        <span className="text-xl font-bold text-yellow-700">${img.price}</span>
                                    </li>
                                </ul>
                                )
                            )}
                        </div>
                        <div className={`flex flex-col`}>
                            <div>
                                <ul className="mt-8 grid list-none grid-cols-2 gap-6 rounded-lg border border-neutral-200 bg-white p-5 font-sans text-ink shadow-sm sm:grid-cols-12">
                                    <li className="text-xl font-bold sm:col-start-9 sm:col-span-2">Subtotal: {totalItems}</li>
                                    <li className="text-xl font-bold sm:col-start-11 sm:col-span-2">Sum: ${totalPrice}</li>
                                </ul>
                            </div>
                            <div className={`grid sm:grid-cols-4 ${styles.marginY}`}>
                                <button
                                    type="submit"
                                    className="font-bold text-ink hover:bg-yellow-500 sm:col-start-3 sm:col-span-2"
                                    onClick={handleClick}
                                >Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
