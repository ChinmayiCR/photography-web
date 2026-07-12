import React from 'react';
import {subStyleVideo, subStylePhoto} from "../constants/index.js";
import {image1} from "../assets/index.js";

const titleClassName = "block w-full text-xl sm:text-2xl";
const contentClassName =
    "block w-full mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-light leading-relaxed sm:leading-loose";
const styleListClassName =
    "w-full text-xl sm:text-2xl text-white list-none p-0 m-0";
const featureSectionClassName = "my-8 sm:my-16 flex flex-col gap-4 sm:gap-8 w-full";
const imageBlockClassName = "text-white text-2xl sm:text-4xl flex flex-col space-y-4 sm:space-y-8 w-full";

const Features = () => {
    return (
        <div className="font-sans w-full">
            <div className="flex justify-center text-center w-full">
                <text className="text-white w-full max-w-[400px] text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-normal">
                    Customize to your needs
                </text>
            </div>
            <div className={featureSectionClassName}>
                <div className={imageBlockClassName}>
                    <div>Photo</div>
                    <img src={image1} alt="photo" className="w-full h-auto"/>
                </div>
                <ul className={styleListClassName}>
                    {subStylePhoto.map((style) => (
                        <li key={style.id}
                            className="font-normal py-3 sm:py-4 w-full">
                            <a href={`#${style.id}`} className={titleClassName}>{style.title}</a>
                            <span className={contentClassName}>{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={featureSectionClassName}>
                <div className={imageBlockClassName}>
                    <div>Video</div>
                    <img src={image1} alt="photo" className="w-full h-auto"/>
                </div>
                <ul className={styleListClassName}>
                    {subStyleVideo.map((style) => (
                        <li key={style.id}
                            className="font-normal py-3 sm:py-4 w-full">
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
