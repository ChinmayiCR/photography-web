
import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = "919187451509"; 
    const message = "Hello! I would like to order from Mathrushree Bhavana.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 group"
        >
            {/* Tooltip */}
            <span className="rounded-full bg-[#403d38] px-4 py-2 text-xs font-medium text-[#f6f3ee] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                Chat with us
            </span>

            {/* WhatsApp Button */}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110">

                {/* Pulse Animation */}
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />

                {/* WhatsApp Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="relative z-10 h-8 w-8"
                >
                    <path d="M16.04 2.003A13.92 13.92 0 0 0 4.11 23.12L2.25 29.9l6.94-1.82A13.98 13.98 0 1 0 16.04 2.003Zm0 25.4a11.4 11.4 0 0 1-5.81-1.59l-.42-.25-4.12 1.08 1.1-4.01-.28-.44a11.4 11.4 0 1 1 9.53 5.21Zm6.26-8.53c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.57-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.01-.82 2.3-1.61.29-.79.29-1.47.2-1.61-.09-.14-.31-.23-.66-.4Z" />
                </svg>
            </span>
        </a>
    );
};

export default WhatsAppButton;
