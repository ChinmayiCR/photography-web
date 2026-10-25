
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchImages} from "../api/imagesapi.jsx";
import {resolveAssetImage} from "../assets/index.js";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let isMounted = true;

        const loadImages = async () => {
            try {
                const apiImages = await fetchImages();
                if (!isMounted) {
                    return;
                }

                setImages(Array.isArray(apiImages) ? apiImages : []);
                setStatus("success");
            } catch (error) {
                console.error("Failed to fetch gallery images:", error);
                if (isMounted) {
                    setStatus("error");
                }
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    if (status === "loading") {
        return (
            <div id="gallery" className="py-24 text-[#403d38]">
                Loading gallery...
            </div>
        );
    }

    if (status === "error") {
        return (
            <div id="gallery" className="py-24 text-[#403d38]">
                Unable to load gallery.
            </div>
        );
    }

    return (
        <section id="gallery" className="py-16 sm:py-20">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">Our menu</p>
                    <h2 className="editorial-serif text-3xl leading-none text-[#403d38] sm:text-4xl">Enjoy our <em>authentic taste</em></h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-[#726e68]">Make your dishes full of aroma, authentic in taste, and effortless to prepare.</p>
            </div>
            <div
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-5 sm:gap-4 sm:px-3 lg:px-4"
                aria-label="Photography portfolio"
            >
                {images.map((image) => (
                <article key={image.id} className="photo-card flex w-[72vw] shrink-0 snap-start flex-col items-start sm:w-[300px] lg:w-[320px]">
                        <Link to={`/item/${image.id}`}>
                            <div className="overflow-hidden bg-[#e6e1d8]">
                                <img
                                    src={resolveAssetImage(image.link)}
                                    alt={image.id}
                                    className="h-[280px] w-full object-cover sm:h-[340px]"
                                />
                            </div>
                        </Link>
                        <Link to={`/item/${image.id}`}><h3 className="editorial-serif mt-5 text-3xl text-[#403d38]">{image.title}</h3></Link>
                        <Link to={`/item/${image.id}`}>
                            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6f7661]">View product</p>
                        </Link>
                </article>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
