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
        <div className={`bg-black sm:px-16 px-6`}>
            <div id="image">
                <NavBar/>
                <div className={`grid sm:grid-cols-12 grid-cols-4 gap-6 ${styles.paddingY}`}>
                    <div className="text-white text-4xl sm:col-span-4 col-span-4 flex flex-col space-y-8">
                        <div className="font-thin text-sm">{`images >> ${imageId}`}</div>
                        <img src={resolveAssetImage(image.link)} alt="photo"/>
                    </div>
                    <div className="text-white flex flex-col justify-start p-10 m-6 sm:col-span-8 col-span-4 mt-10 space-y-4 list-none">
                        <li className="text-4xl">{image.title}</li>
                        <li className="text-lg font-thin italic">{image.content}</li>
                        <li>{image.price}</li>
                        <button
                            onClick={ () => dispatch({type:"Add", image: image})}
                            type="submit"
                            className="text-black font-semibold px-5 py-2 rounded-md hover:bg-primary transition"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Item;
