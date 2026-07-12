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
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} min-h-screen`}>
            <div id="cart">
                <NavBar/>
                <div className={`${styles.paddingY}`}>
                    <text className={`text-white font-sans text-2xl`}>Shopping Cart</text>
                    <div>
                        <div className={`w-full`}>
                            {cart.map((img) => (
                                <ul key={img.id} className={`grid sm:grid-cols-12 grid-cols-2 items-center text-white font-sans gap-6 ${styles.paddingY}`}>
                                    <li
                                        className={`sm:col-span-2`}>
                                        <img src={resolveAssetImage(img.link)} alt={img.title}/>
                                    </li>
                                    <li
                                        className={`sm:col-span-6`}>
                                        {img.title}
                                    </li>
                                    <li
                                        className={`sm:col-span-2 flex items-center justify-center`}>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                className="text-xl px-3 py-1 border border-white rounded hover:bg-white hover:text-primary cursor-pointer"
                                                onClick={() => handleDecrement(img.id)}
                                            >
                                                -
                                            </button>
                                            <text className="text-xl px-2 min-w-[1.5rem] text-center">{img.quantity}</text>
                                            <button
                                                type="button"
                                                className="text-xl px-3 py-1 border border-white rounded hover:bg-white hover:text-primary cursor-pointer"
                                                onClick={() => handleIncrement(img.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </li>
                                    <li
                                        className={`sm:col-span-2 flex items-center justify-center`}>
                                        <text className="text-xl">${img.price}</text>
                                    </li>
                                </ul>
                                )
                            )}
                        </div>
                        <div className={`flex flex-col`}>
                            <div>
                                <ul className={`list-none text-white font-sans gap-6 grid sm:grid-cols-12 grid-cols-2`}>
                                    <li className={`sm:col-start-9 sm:col-span-2 text-2xl`}>Subtotal: {totalItems}</li>
                                    <li className={`sm:col-start-11 sm:col-span-2 text-2xl`}>Sum: ${totalPrice}</li>
                                </ul>
                            </div>
                            <div className={`grid sm:grid-cols-4 ${styles.marginY}`}>
                                <button
                                    type="submit"
                                    className="text-black font-semibold hover:bg-primary sm:col-start-3 sm:col-span-2"
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
