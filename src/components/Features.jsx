import React from 'react';
import {subStyleVideo, subStylePhoto} from "../constants/index.js";
import {image1} from "../assets/index.js";

const titleClassName = "block w-full text-lg font-bold text-ink sm:text-xl";
const contentClassName =
    "mt-2 block w-full text-base leading-7 text-muted";
const styleListClassName =
    "grid w-full list-none gap-4 p-0 m-0";
const featureSectionClassName = "my-10 grid w-full items-center gap-8 md:grid-cols-2 sm:my-16";
const imageBlockClassName = "flex w-full flex-col space-y-4 text-2xl font-bold text-ink sm:text-4xl";

const Features = () => {
    return (
        <div className="font-sans w-full">
            <div className="flex justify-center text-center w-full">
                <h2 className="w-full max-w-[620px] text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-6xl">
                    Customize to your needs
                </h2>
            </div>
            <div className={featureSectionClassName}>
                <div className={imageBlockClassName}>
                    <div>Photo</div>
                    <img src={image1} alt="photo" className="h-[420px] w-full rounded-lg object-cover shadow-xl shadow-neutral-200"/>
                </div>
                <ul className={styleListClassName}>
                    {subStylePhoto.map((style) => (
                        <li key={style.id}
                            className="w-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                            <a href={`#${style.id}`} className={titleClassName}>{style.title}</a>
                            <span className={contentClassName}>{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${featureSectionClassName} md:[&>*:first-child]:order-2`}>
                <div className={imageBlockClassName}>
                    <div>Video</div>
                    <img src={image1} alt="photo" className="h-[420px] w-full rounded-lg object-cover shadow-xl shadow-neutral-200"/>
                </div>
                <ul className={styleListClassName}>
                    {subStyleVideo.map((style) => (
                        <li key={style.id}
                            className="w-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                            <a href={`#${style.id}`} className={titleClassName}>{style.title}</a>
                            <span className={contentClassName}>{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Features;
