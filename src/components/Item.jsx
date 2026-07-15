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
        <div className="min-h-screen bg-paper px-5 text-ink sm:px-10 lg:px-16">
            <div id="image" className={`${styles.boxWidth}`}>
                <NavBar/>
                <div className={`grid grid-cols-4 gap-8 ${styles.paddingY} sm:grid-cols-12`}>
                    <div className="col-span-4 flex flex-col space-y-6 text-4xl sm:col-span-5">
                        <div className="text-sm font-semibold text-muted">{`images >> ${imageId}`}</div>
                        <img src={resolveAssetImage(image.link)} alt="photo" className="h-[520px] w-full rounded-lg object-cover shadow-xl shadow-neutral-200"/>
                    </div>
                    <div className="col-span-4 mt-4 flex list-none flex-col justify-start space-y-5 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm sm:col-span-7 sm:mt-10">
                        <li className="text-4xl font-extrabold text-ink">{image.title}</li>
                        <li className="text-lg leading-8 text-muted">{image.content}</li>
                        <li className="text-xl font-bold text-yellow-700">{image.price}</li>
                        <button
                            onClick={ () => dispatch({type:"Add", image: image})}
                            type="submit"
                            className="w-fit rounded-md bg-primary px-5 py-2 font-bold text-ink transition hover:bg-yellow-500"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Item;
