import React, { useState } from "react";
import {instagram, whatsapp, email, map} from "../assets/index.js";
import {sendQueryEmail} from "../api/sendmailapi.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("Sending...");

        try {
            await sendQueryEmail({
                sender: formData.email,
                senderName: formData.name,
                senderPhone: formData.phone,
                message: formData.message,
            });
            setStatus("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending contact message:", error);
            setStatus("Failed to send message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    const phoneNumber = "+917483233362";
    const message = encodeURIComponent("Hello, I want to order from Mathrushree Bhavana!");

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    return (
        <section id="contactus" className="border-t border-[#d8d1c7] py-16 sm:py-20">
            <div className="flex flex-col items-start justify-between gap-12 md:flex-row">

            {/* Left Section */}
            <div className="flex-1 text-[#403d38]">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">Get in touch</p>
                    <h2 className="editorial-serif text-5xl leading-none sm:text-6xl">Pure . Fresh . Healthy</h2>
                </div>

                <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold">Follow Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={instagram} alt="instagram" className="w-[20px] h-[20px]"/>
                                <a href={"https://www.instagram.com/mathrushree_bhavana/"} className="transition hover:text-[#6f7661]">mathrushree_bhavana</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={whatsapp} alt="whatsapp" className="w-[20px] h-[20px]"/>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#6f7661]">+919187451509/+917483233362</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={map} alt="map" className="w-[20px] h-[20px]"/>
                                <a href={"https://maps.app.goo.gl/fipxv6tXzpi5FvsC8"} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#6f7661]">Mathrushree Bhavana</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold">Email Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={email} alt="email" className="h-[20px] w-[20px]"/>
                                <span>mathrushreebhavana.foodprodcuts@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full flex-1 border border-[#d8d1c7] bg-[#eee9e0] p-6 text-[#403d38] sm:p-9">
                <h3 className="editorial-serif mb-6 text-3xl">Send a message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Mathrushree Bhavana"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-[#bcb5aa] bg-transparent px-0 py-3 outline-none placeholder:text-[#8e887f] focus:border-[#403d38]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-[#bcb5aa] bg-transparent px-0 py-3 outline-none placeholder:text-[#8e887f] focus:border-[#403d38]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone*</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+919187451509"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-[#bcb5aa] bg-transparent px-0 py-3 outline-none placeholder:text-[#8e887f] focus:border-[#403d38]"
                        />

                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message*</label>
                        <textarea
                            name="message"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full border-b border-[#bcb5aa] bg-transparent px-0 py-3 outline-none placeholder:text-[#8e887f] focus:border-[#403d38] resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="border border-[#403d38] bg-[#403d38] px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#f6f3ee] transition hover:bg-transparent hover:text-[#403d38] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                    {status && <p className="text-sm font-light">{status}</p>}
                </form>
            </div>
            </div>
        </section>
    );
};

export default Contact;
