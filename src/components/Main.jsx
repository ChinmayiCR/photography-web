import React from 'react';
import {content, heading, makers} from "../constants/index.js";
import {HashLink} from "react-router-hash-link";

const Main = () => (
    <section id="home" className="max-w-2xl text-left text-white">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em]">Mathrushree Bhavana</p>
        <h1 className="editorial-serif max-w-xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            {heading.split(" ").slice(0, 3).join(" ")} <em>{heading.split(" ").slice(3).join(" ")}</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">{makers}. {content}</p>
        <HashLink
            smooth
            to="/#gallery"
            className="mt-9 inline-flex min-w-[250px] items-center justify-center border border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#403d38]"
        >
            Check the menu
        </HashLink>
    </section>
);


export default Main;
