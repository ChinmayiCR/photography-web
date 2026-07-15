import React from 'react';
import {logo1} from "../assets/index.js";

const TransitionPage = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-paper">
            <img
                src={logo1}
                alt="Logo"
                className="h-[110px] w-[110px]"
            />
            <span className="font-sans text-lg font-bold text-ink">iKON Elevators</span>
        </div>
    );
};

export default TransitionPage;
