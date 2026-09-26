import {images} from "../constants/index.js";
import {NavBar} from "../components/index.js";
import styles from "../style.js";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/CartContextProvider.jsx";
import {resolveAssetImage} from "../assets/index.js";

const Item = () => {
    const {imageId} = useParams();
    const image = images.find((img) => String(img.id) === imageId);
    const {dispatch} = useContext(CartContext);
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
                    <div className="m-0 mt-0 flex flex-col justify-center space-y-4 list-none text-white sm:col-span-8 col-span-4 sm:mt-10 sm:p-10">
                        <li className="text-4xl">{image.title}</li>
                        <li className="text-lg font-thin italic">{image.content}</li>
                        <li>{image.price}</li>
                        <button
                            onClick={ () => dispatch({type:"Add", image: image})}
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
