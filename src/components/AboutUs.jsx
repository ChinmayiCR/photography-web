import React from 'react';
import {aboutUs, contentAboutUs} from "../constants/index.js";

const AboutUs = () => (
    <section id="aboutus" className="grid items-center gap-12 py-10 md:grid-cols-1 md:py-16">
        <div className="flex flex-col items-start justify-center font-sans">

            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-normal text-ink sm:text-6xl md:text-7xl">
                {aboutUs}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                {contentAboutUs}
            </p>
        </div>
    </section>
);

export default AboutUs;
