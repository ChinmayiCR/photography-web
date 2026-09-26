import React from 'react';
import {logo1} from "../assets/index.js";

const TransitionPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img
                src={logo1}
                alt="Logo"
                className="w-[110px] h-[110px] filter invert"
            />
            <text className={`text-lg text-white font-sans`}>mathrushree Bhavana</text>
        </div>
    );
};

export default TransitionPage;
