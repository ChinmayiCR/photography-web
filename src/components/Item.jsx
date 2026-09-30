import {images} from "../constants/index.js";
import {NavBar} from "../components/index.js";
import styles from "../style.js";
import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {CartContext} from "../context/CartContextProvider.jsx";
import {resolveAssetImage} from "../assets/index.js";

const Item = () => {
    const {imageId} = useParams();
    const image = images.find((img) => String(img.id) === imageId);
    const {dispatch} = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(image?.sizes?.[0] ?? "");

    if (!image) {
        return null;
    }

    const selectedPrice = image.priceBySize[selectedSize];
    const itemForCart = {...image, id: `${image.id}-${selectedSize}`, selectedSize, price: selectedPrice};
    return (
        <div className="min-h-screen bg-ivory">
            <header className="sticky top-0 z-50 border-b border-[#d8d1c7] bg-[#f6f3ee]/95 backdrop-blur">
                <NavBar/>
            </header>
            <main className="relative min-h-[calc(100vh-57px)] bg-[url(./assets/background.png)] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#27251f]/55" />
                <div id="image" className="relative mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
                    <div className={`grid grid-cols-4 gap-6 sm:grid-cols-12 ${styles.paddingY}`}>
                    <div className="flex flex-col space-y-8 text-4xl text-white sm:col-span-4 col-span-4">
                        <div className="font-thin text-sm">{`images >> ${imageId}`}</div>
                        <img src={resolveAssetImage(image.link)} alt="photo" className="max-h-[560px] w-full object-cover"/>
                    </div>
                    <div id="itemdetails" className="m-0 mt-0 flex flex-col justify-center space-y-4 list-none text-white sm:col-span-8 col-span-4 sm:mt-10 sm:p-10">
                        <li className="text-4xl">{image.title}</li>
                        <li className="text-lg font-thin italic">{image.content}</li>
                        <li className="text-xl font-medium">Rs. {selectedPrice}</li>
                        <li className="text-sm leading-relaxed"><span className="font-semibold">Ingredients:</span> {image.ingredient}</li>
                        <li className="text-sm leading-relaxed"><span className="font-semibold">Expiry:</span> {image.expiry}</li>
                        <li className="flex flex-col gap-2 text-sm">
                            <span className="font-semibold">Size</span>
                            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose package size">
                                {image.sizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setSelectedSize(size)}
                                        aria-pressed={selectedSize === size}
                                        className={`border px-3 py-2 text-xs font-semibold transition ${selectedSize === size ? "border-white bg-white text-[#403d38]" : "border-white/60 text-white hover:border-white"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </li>
                        <button
                            onClick={ () => dispatch({type:"Add", image: itemForCart})}
                            type="submit"
                            className="mt-3 w-fit border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#403d38]"
                        >Add to Cart</button>
                    </div>
                </div>
                </div>
            </main>
            </div>
    );
}


export default Item;
