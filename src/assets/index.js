import background from "./background.jpg";
import menu from "./menu.png";
import close from "./close.png";
import logo from "./logo.png";
import cartIcon from "./cart.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
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
  instagram,
  whatsapp,
  email,
  facebook,
  map,
    logo1,
  imageAssets,
  resolveAssetImage
};
