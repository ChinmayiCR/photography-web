
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
            <div id="gallery" className="mx-auto max-w-6xl px-0 py-12 font-sans text-muted">
                Loading gallery...
            </div>
        );
    }

    if (status === "error") {
        return (
            <div id="gallery" className="mx-auto max-w-6xl px-0 py-12 font-sans text-muted">
                Unable to load gallery.
            </div>
        );
    }

    return (
        <div id="gallery" className="mx-auto grid max-w-6xl grid-cols-1 gap-7 py-8 font-sans text-ink sm:grid-cols-2 md:grid-cols-3">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col items-start rounded-lg border border-neutral-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                        <Link to={`/item/${image.id}`} className="block w-full">
                            <img
                                src={resolveAssetImage(image.link)}
                                alt={image.id}
                                className="h-[420px] w-full rounded-lg object-cover"
                            />
                        </Link>
                        <Link to={`/item/${image.id}`}><h3 className="mt-4 text-lg font-bold text-ink">{image.title}</h3></Link>
                        <Link to={`/item/${image.id}`}>
                            <p className="text-sm font-semibold text-yellow-700">{image.price}</p>
                        </Link>

                </div>
            ))}
        </div>
    );
};

export default Gallery;
