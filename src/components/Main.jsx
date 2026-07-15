import React from 'react';
import {content, heading, makers} from "../constants/index.js";
import {background} from "../assets/index.js";

const Main = () => (
    <section id="home" className="grid items-center gap-12 py-10 md:grid-cols-2 md:py-16">
        <div className="flex flex-col items-start justify-center font-sans">
            <p className="mb-5 inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-yellow-700">
                {makers}
            </p>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-normal text-ink sm:text-6xl md:text-7xl">
                {heading}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                {content}
            </p>
        </div>

        <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-lg bg-yellow-300 md:block" />
            <img
                src={background}
                alt=""
                className="relative z-10 h-[420px] w-full rounded-lg object-cover shadow-2xl shadow-neutral-300 md:h-[560px]"
            />
        </div>
    </section>
);


export default Main;
