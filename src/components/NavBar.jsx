import {useContext, useState} from 'react';
import {logo, cartIcon, close, menu} from '../assets';
import {navLinks} from "../constants";
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContextProvider.jsx";
import {HashLink} from "react-router-hash-link";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const {cart} = useContext(CartContext);
    return (
        <nav className={`w-full flex py-8 items-center navbar relative`}>
            <ul className="list-none sm:flex hidden justify-start items-center flex-1">
                {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`font-sans cursor-pointer text-[16px] 
                            text-white ${index === 0 ? 'ml-0' : 'ml-10'}`}>
                            <HashLink smooth={true} to={`/#${nav.id}`} className={`button-special`}>{nav.title}</HashLink>
                        </li>
                    )
                )}
            </ul>
            <div className="sm:hidden flex-1 justify-start items-center">
                <img src={!toggle ? menu : close}
                     alt ="menu"
                     className="w-[40px] h-[40px] object-contain filter invert"
                     onClick={() => setToggle( (prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20
                left-0 mx-0 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex justify-start items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                                <li key={nav.id}
                                    className={`font-sans cursor-pointer text-[16px] 
                            text-white ${index === 0 ? 'mb-0' : 'mb-4'}`}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 items-center flex gap-2">
                <Link to={"/"}><img src={logo} alt="logo" className="w-[30px] h-[30px] filter invert" /></Link>
                <Link to={"/"}><text className={`font-sans text-white`}>EyeShade photography</text></Link>
            </div>

            <Link to={"/cart"} className="flex items-center">
                <img src={cartIcon} alt="cart" className="w-[30px] h-[30px] filter invert"/>
                <text className="text-white min-w-[1.5rem] px-2 text-center">{cart.length}</text>
            </Link>

        </nav>
    );
};

export default NavBar;