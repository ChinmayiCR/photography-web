import React, {useContext, useState} from "react";
import {NavBar} from "./index.js";
import {CartContext} from "../context/CartContextProvider.jsx";
import {sendEmail} from "../api/sendmailapi.jsx";

const Details = () => {
    const {cart, } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const [sender, setSender] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [status, setStatus] = useState("");

    const emailJsonBody = {
        sender: sender,
        senderName: senderName,
        senderPhone: senderPhone,
        senderOrder: cart.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price
        }))
    };

    const handleMailSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const result = await sendEmail(emailJsonBody);
            console.log("Email sent:", result);
            setStatus("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("Failed to send email. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-paper text-ink">
            <div id="details" className="mx-auto w-full max-w-[1180px] justify-between rounded-lg px-5 py-10 sm:px-10 lg:px-16">
                <NavBar/>
                <div className="mt-8 flex-1 rounded-lg border border-neutral-200 bg-white p-6 font-sans text-ink shadow-xl shadow-neutral-200">
                    <h3 className="mb-6 text-xl font-bold text-ink">Send Us Your Details</h3>

                    <form onSubmit={handleMailSubmit} className="space-y-5">
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">Full Name*</label>
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
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                                required
                                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-semibold text-neutral-700">Phone*</label>
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
                            <label className="mb-1 block text-md font-semibold text-neutral-700">Your Order</label>
                            <div >
                                <ol className="list-decimal list-inside">
                                    {cart.map((crt, ) => (
                                            <li key={crt.title}
                                                className="cursor-pointer font-sans text-[16px] text-muted">
                                                {crt.title}
                                            </li>
                                        )
                                    )}
                                </ol>

                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-md font-bold text-ink">Your total price:${totalPrice}</label>
                        </div>

                        <button
                            type="submit"
                            className="rounded-md bg-primary px-5 py-2 font-bold text-ink transition hover:bg-yellow-500"
                        >
                            Confirm Order
                        </button>
                    </form>
                    {status && <p>{status}</p>}
                </div>
            </div>
        </div>
    );
};

export default Details;
