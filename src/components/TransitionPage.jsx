import React from 'react';
import {logo1} from "../assets/index.js";

const TransitionPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img
                src={logo1}
                alt="Logo"
                className="w-[600px] h-[320px]"
            />
        </div>
    );
};

export default TransitionPage;
