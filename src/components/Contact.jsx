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
        <div id="contactus" className="flex w-full flex-col items-start justify-between gap-8 rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200 md:flex-row md:p-10">

            {/* Left Section */}
            <div className="flex-1 font-sans">
                <h4 className="text-sm font-bold uppercase tracking-wide text-yellow-700">
                    Contact Us
                </h4>

                <div className="mt-8 space-y-6">
                    {/* Location */}
                    <div className="flex items-start">
                        <div>
                            <h5 className="font-bold text-ink">Follow Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={instagram} alt="instagram" className="w-[20px] h-[20px]"/>
                                <a href={"https://www.instagram.com/eyeshade_photography/?igsh=MWc1d2RyZjlhNDIzMw%3D%3D"} className="text-muted transition-colors hover:text-yellow-700">iKON_Elevators</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={facebook} alt="instagram" className="w-[20px] h-[20px]"/>
                                <a href={"https://www.facebook.com/share/19Veufdv7o/"} className="text-muted transition-colors hover:text-yellow-700">iKON_Elevators</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={whatsapp} alt="whatsapp" className="w-[20px] h-[20px]"/>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-yellow-700">+91 9901558949</a>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={map} alt="map" className="w-[20px] h-[20px]"/>
                                <a href={"https://maps.app.goo.gl/HqipgFw51sGFHLvV6?g_st=aw"} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-yellow-700">iKON Elevators</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div>
                            <h5 className="font-bold text-ink">Email Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={email} alt="instagram" className="h-5 w-5"/>
                                <span className="text-muted">abc@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full flex-1 rounded-lg bg-neutral-50 p-6 font-sans text-ink ring-1 ring-neutral-200">
                <h3 className="mb-6 text-xl font-bold text-ink">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="mb-1 block text-sm font-semibold text-neutral-700">Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="iKON Elevators"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-semibold text-neutral-700">Email*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-semibold text-neutral-700">Phone*</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 9901558949"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                        />

                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-semibold text-neutral-700">Message*</label>
                        <textarea
                            name="message"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full resize-none rounded-md border border-neutral-300 bg-white px-3 py-2 text-ink outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="rounded-md bg-primary px-5 py-2 font-bold text-ink transition hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                    {status && <p className="text-sm text-muted">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
