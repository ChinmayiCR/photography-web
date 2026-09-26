import React from 'react';
import {subStyleVideo, subStylePhoto} from "../constants/index.js";
import {image1} from "../assets/index.js";

const titleClassName = "editorial-serif block w-full text-xl text-[#403d38] sm:text-2xl";
const contentClassName =
    "mt-2 block w-full text-sm leading-relaxed text-[#726e68] sm:text-base";
const styleListClassName =
    "m-0 w-full list-none divide-y divide-[#d8d1c7] p-0";
const featureSectionClassName = "grid gap-10 py-12 sm:grid-cols-2 sm:gap-14 sm:py-16";
const imageBlockClassName = "flex flex-col gap-5";

const Features = () => {
    return (
        <section className="border-t border-[#d8d1c7] py-24 sm:py-32">
            <div className="max-w-2xl">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">What we create</p>
                <h2 className="editorial-serif text-5xl leading-none text-[#403d38] sm:text-6xl">Your story, <em>considered</em>.</h2>
                <p className="mt-5 text-sm leading-relaxed text-[#726e68] sm:text-base">From the fleeting in-between moments to the grand celebrations, every detail is shaped around your day.</p>
            </div>
            <div className={featureSectionClassName}>
                <div className={imageBlockClassName}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">Photography</p>
                    <img src={image1} alt="Wedding photography" className="h-[420px] w-full object-cover"/>
                </div>
                <ul className={styleListClassName}>
                    {subStylePhoto.map((style) => (
                        <li key={style.id}
                            className="py-5">
                            <a href={`#${style.id}`} className={titleClassName}>{style.title}</a>
                            <span className={contentClassName}>{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={featureSectionClassName}>
                <div className={imageBlockClassName}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">Films</p>
                    <img src={image1} alt="Wedding films" className="h-[420px] w-full object-cover"/>
                </div>
                <ul className={styleListClassName}>
                    {subStyleVideo.map((style) => (
                        <li key={style.id}
                            className="py-5">
                            <a href={`#${style.id}`} className={titleClassName}>{style.title}</a>
                            <span className={contentClassName}>{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Features;
