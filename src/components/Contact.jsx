import React, { useState } from "react";
import {instagram, whatsapp, email, facebook, map} from "../assets/index.js";
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

    const phoneNumber = "919901558949";
    const message = encodeURIComponent("Hello, I want to book a photography service!");

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    return (
        <div id="contactus" className="w-full bg-primary pt-20 pb-12  px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-8 rounded-lg">

            {/* Left Section */}
            <div className="flex-1 font-sans">
                <h4 className=" uppercase text-sm font-semibold tracking-wide text-white">
                    Contact Us
                </h4>

                <div className="mt-8 space-y-6">
                    {/* Location */}
                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold text-white">Follow Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={instagram} alt="instagram" className="w-[20px] h-[20px]"/>
                                <a href={"https://www.instagram.com/eyeshade_photography/?igsh=MWc1d2RyZjlhNDIzMw%3D%3D"} className="text-white">eyeshade_photography</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={facebook} alt="instagram" className="w-[20px] h-[20px]"/>
                                <a href={"https://www.facebook.com/share/19Veufdv7o/"} className="text-white">Eyeshade Photography</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={whatsapp} alt="whatsapp" className="w-[20px] h-[20px]"/>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-white">+91 9901558949</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={map} alt="map" className="w-[20px] h-[20px]"/>
                                <a href={"https://maps.app.goo.gl/HqipgFw51sGFHLvV6?g_st=aw"} target="_blank" rel="noopener noreferrer" className="text-white">eyeshade photography</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold text-white">Email Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={email} alt="instagram" className="w-[20px] h-[20px] filter invert"/>
                                <text className="text-white">abc@gmail.com</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 bg-primary rounded-lg shadow-md shadow-white p-6 border-white text-white font-sans w-full">
                <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Eyeshade Photography"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
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
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone*</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 9901558949"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
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
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="bg-primary text-black font-semibold px-5 py-2 rounded-md hover:bg-primary transition"
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                    {status && <p className="text-sm font-light">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
