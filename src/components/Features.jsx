import React from 'react';
import { subStylePhoto} from "../constants/index.js";
import {image2} from "../assets/index.js";

const titleClassName = "editorial-serif block w-full text-xl text-[#403d38] sm:text-2xl";
const contentClassName =
    "mt-2 block w-full text-sm leading-relaxed text-[#726e68] sm:text-base";
const styleListClassName =
    "m-0 w-full list-none divide-y divide-[#d8d1c7] p-0";
const featureSectionClassName = "grid gap-10 py-4 sm:grid-cols-2 sm:gap-14 sm:py-4";
const imageBlockClassName = "flex flex-col gap-5";

const Features = () => {
    return (
        <section className="border-t border-[#d8d1c7] py-4 sm:py-4">
            <div className="max-w-2xl">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">What we make</p>
                <h2 className="editorial-serif text-3xl leading-none text-[#403d38] sm:text-4xl">to your taste, <em>and health</em>.</h2>
            </div>
            <div className={featureSectionClassName}>
            <div className={imageBlockClassName}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">Product</p>
                <img
                    src={image2}
                    alt="Wedding photography"
                    className="h-auto max-h-[800px] w-full max-w-[700px] object-contain"
                />
            </div>
                <ul className={styleListClassName}>
                    {subStylePhoto.map((style) => (
                        <li key={style.id}
                            className="py-9">
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
