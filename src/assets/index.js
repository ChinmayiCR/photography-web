import background from "./background.png";
import menu from "./menu.png";
import close from "./close.png";
import logo from "./logo.png";
import cartIcon from "./cart.png";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import image5 from "./image5.jpeg";
import image6 from "./image6.jpeg";
import image7 from "./image7.jpeg";
import image8 from "./image8.jpeg";
import image9 from "./image9.jpeg";
import image10 from "./image10.jpeg";
import image11 from "./image11.jpeg";
import image12 from "./image12.jpeg";
import image13 from "./image13.jpeg";
import image14 from "./image14.jpeg";
import image15 from "./image15.jpeg";
import image16 from "./image16.jpeg";
import image17 from "./image17.jpeg";
import image18 from "./image18.jpeg";
import image19 from "./image19.jpeg";
import instagram from "./instagram.png";
import whatsapp from "./whatsapp.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import map from "../assets/map.png";
import logo1 from "../assets/logo.png"

const imageAssets = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17
};

const resolveAssetImage = (link) => imageAssets[link] || link;

export {
  background,
  menu,
  close,
  logo,
  cartIcon,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  instagram,
  whatsapp,
  email,
  facebook,
  map,
  logo1,
  imageAssets,
  resolveAssetImage
};
