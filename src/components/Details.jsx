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
        <div className={`bg-primary min-h-screen`}>
            <div id="details" className="w-full py-10 px-6 md:px-20 justify-between rounded-lg ">
                <NavBar/>
                <div className="flex-1 bg-primary rounded-lg shadow-md shadow-white p-6 border-white text-white font-sans">
                    <h3 className="text-xl font-semibold text-white mb-6">Send Us Your Details</h3>

                    <form onSubmit={handleMailSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone*</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 1111111111"
                                value={senderPhone}
                                onChange={(e) => setSenderPhone(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-md mb-1">Your Order</label>
                            <div >
                                <ol className="list-decimal list-inside">
                                    {cart.map((crt, ) => (
                                            <li key={crt.title}
                                                className={`font-sans cursor-pointer text-[16px] 
                            text-white `}>
                                                {crt.title}
                                            </li>
                                        )
                                    )}
                                </ol>

                            </div>
                        </div>

                        <div>
                            <label className="block text-md mb-1">Your total price:${totalPrice}</label>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-black font-semibold px-5 py-2 rounded-md hover:bg-primary transition"
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
