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
        <nav className="relative flex w-full items-center py-4 font-sans navbar">
            <ul className="list-none sm:flex hidden justify-start items-center flex-1">
                {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`cursor-pointer text-[15px] font-semibold capitalize text-neutral-700 transition-colors hover:text-yellow-600 ${index === 0 ? 'ml-0' : 'ml-10'}`}>
                            <HashLink smooth={true} to={`/#${nav.id}`} className="button-special">{nav.title}</HashLink>
                        </li>
                    )
                )}
            </ul>
            <div className="sm:hidden flex-1 justify-start items-center">
                <img src={!toggle ? menu : close}
                     alt ="menu"
                     className="h-10 w-10 cursor-pointer object-contain"
                     onClick={() => setToggle( (prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} absolute left-0 top-16 z-50 my-2 min-w-[180px] rounded-lg border border-neutral-200 bg-white p-5 shadow-xl sidebar`}>
                    <ul className="list-none flex justify-start items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                                <li key={nav.id}
                                    className={`cursor-pointer text-[15px] font-semibold capitalize text-neutral-700 transition-colors hover:text-yellow-600 ${index === 0 ? 'mb-0' : 'mb-4'}`}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 items-center flex gap-2">
                <Link to={"/"}><img src={logo} alt="logo" className="h-9 w-9 rounded-md object-contain" /></Link>
                <Link to={"/"}><span className="text-sm font-extrabold tracking-tight text-ink sm:text-base">iKON Elevators</span></Link>
            </div>

            <Link to={"/cart"} className="flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm transition-colors hover:border-yellow-300">
                <img src={cartIcon} alt="cart" className="h-6 w-6"/>
                <span className="min-w-[1.5rem] px-2 text-center text-sm font-bold text-ink">{cart.length}</span>
            </Link>

        </nav>
    );
};

export default NavBar;
