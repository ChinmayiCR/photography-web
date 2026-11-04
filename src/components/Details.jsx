
import React, { useContext, useState } from "react";
import { Footer, NavBar } from "./index.js";
import { CartContext } from "../context/CartContextProvider.jsx";

const Details = () => {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const [senderPlace, setSender] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [status, setStatus] = useState("");

    const handleMailSubmit = (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            setStatus("Your cart is empty.");
            return;
        }

        setStatus("Redirecting to WhatsApp...");

        const phoneNumber = "919187451509";

        const orderItems = cart.map((item, index) => {
            const itemTotal = item.price * item.quantity;

            return (
                `${index + 1}. ${item.title}\n` +
                `   Size: ${item.selectedSize || "N/A"}\n` +
                `   Quantity: ${item.quantity}\n` +
                `   Unit Price: Rs. ${item.price}\n` +
                `   Subtotal: Rs. ${itemTotal}`
            );
        }).join("\n\n");

        const message = `
*NEW ORDER ENQUIRY - MATHRUSHREE BHAVANA*

Hello! You have received a new order enquiry.

*CUSTOMER DETAILS*
Name: ${senderName}
Place: ${senderPlace}
Phone: ${senderPhone}

*ORDER DETAILS*
${orderItems}

*TOTAL ITEMS: ${totalItems}*
*TOTAL AMOUNT: Rs. ${totalPrice}*

Please contact the customer to confirm the order.

Thank you!
Mathrushree Bhavana
        `.trim();

        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.location.href = url;
    };

    return (
        <div className="min-h-screen bg-paper text-ink">
            <div
                id="details"
                className="mx-auto w-full max-w-[1180px] justify-between rounded-lg px-5 py-10 sm:px-10 lg:px-16"
            >
                <NavBar />

                <div className="mt-8 flex-1 rounded-lg border border-neutral-200 bg-white p-6 font-sans text-ink shadow-xl shadow-neutral-200">
                    <h3 className="mb-6 text-xl font-bold text-ink">
                        Send Us Your Details
                    </h3>

                    <form onSubmit={handleMailSubmit} className="space-y-5">
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                required
                                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">
                                Place*
                            </label>
                            <input
                                type="text"
                                name="place"
                                placeholder="City, State"
                                value={senderPlace}
                                onChange={(e) => setSender(e.target.value)}
                                required
                                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">
                                Phone*
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 1111111111"
                                value={senderPhone}
                                onChange={(e) => setSenderPhone(e.target.value)}
                                required
                                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-md font-semibold text-neutral-700">
                                Your Order
                            </label>

                            <div className="space-y-3">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-md border border-neutral-200 bg-paper p-4"
                                    >
                                        <p className="font-semibold text-ink">
                                            {item.title}
                                        </p>

                                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted">
                                            <p>
                                                Size: <span className="font-medium text-ink">
                                                    {item.selectedSize || "N/A"}
                                                </span>
                                            </p>

                                            <p>
                                                Quantity: <span className="font-medium text-ink">
                                                    {item.quantity}
                                                </span>
                                            </p>

                                            <p>
                                                Unit Price: <span className="font-medium text-ink">
                                                    Rs. {item.price}
                                                </span>
                                            </p>

                                            <p>
                                                Subtotal: <span className="font-semibold text-ink">
                                                    Rs. {item.price * item.quantity}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-neutral-200 pt-4">
                            <p className="text-sm text-muted">
                                Total Items: {totalItems}
                            </p>

                            <p className="mt-1 text-lg font-bold text-ink">
                                Your total price: Rs. {totalPrice}
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={cart.length === 0}
                            className="border border-[#403d38] bg-[#403d38] px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#f6f3ee] transition hover:bg-transparent hover:text-[#403d38] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            Confirm Order
                        </button>
                    </form>

                    {status && (
                        <p className="mt-4 text-sm text-muted">{status}</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Details;