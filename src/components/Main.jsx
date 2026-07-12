import React from 'react';
import {content, heading, makers} from "../constants/index.js";

const Main = () => (
    <section id="home" className={`flex md:flex-row flex-col justify-center relative`}>
        <div className={`flex flex-col items-center justify-center text-white space-y-20 sm:py-15 py-4`}>
            <div>
                <text className="font-sans text-white ss:text-[50px] text-6xl">{heading}</text>
            </div>

            <div >
                <text className="font-sans text-white ss:text-[20px] text-lg font-light">{makers}</text>
            </div>

            <div className={`w-100 text-center`}>
                <text className="font-sans text-white ss:text-[10px] text-[15px] font-thin">{content}</text>
            </div>
        </div>
    </section>
);


export default Main;