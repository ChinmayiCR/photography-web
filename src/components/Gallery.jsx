
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
            <div id="gallery" className="max-w-6xl mx-auto px-8 pt-20 pb-12 font-sans text-white">
                Loading gallery...
            </div>
        );
    }

    if (status === "error") {
        return (
            <div id="gallery" className="max-w-6xl mx-auto px-8 pt-20 pb-12 font-sans text-white">
                Unable to load gallery.
            </div>
        );
    }

    return (
        <div id="gallery" className="max-w-6xl mx-auto px-8 pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 font-sans text-white">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col items-start">
                        <Link to={`/item/${image.id}`}>
                            <img
                                src={resolveAssetImage(image.link)}
                                alt={image.id}
                                className="w-full h-[500px] object-cover rounded-lg"
                            />
                        </Link>
                        <Link to={`/item/${image.id}`}><h3 className="mt-4 text-lg">{image.title}</h3></Link>
                        <Link to={`/item/${image.id}`}>
                            <p className="text-sm font-light">{image.price}</p>
                        </Link>

                </div>
            ))}
        </div>
    );
};

export default Gallery;
