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
        <nav className="relative flex items-center px-8 py-6 sm:px-12 lg:px-20">
            <ul className="hidden flex-1 list-none items-center gap-7 sm:flex">
                {navLinks.map((nav) => (
                        <li key={nav.id}
                            className="cursor-pointer text-[12px] font-medium uppercase tracking-[0.14em] text-[#403d38]">
                            <HashLink smooth={true} to={`/#${nav.id}`} className="transition hover:text-[#6f7661]">{nav.title}</HashLink>
                        </li>
                    )
                )}
            </ul>
            <div className="flex flex-1 items-center sm:hidden">
                <img src={!toggle ? menu : close}
                     alt ="menu"
                     className="h-5 w-5 object-contain"
                     onClick={() => setToggle( (prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} absolute left-0 top-full w-full border-b border-[#d8d1c7] bg-[#f6f3ee] px-6 py-5`}>
                    <ul className="list-none flex justify-start items-start flex-1 flex-col">
                        {navLinks.map((nav) => (
                                <li key={nav.id}
                                    className="mb-4 cursor-pointer text-sm font-medium uppercase tracking-[0.14em] text-[#403d38]">
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>

            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <Link to={"/"}><img src={logo} alt="Mathrushree Bhavana" className="h-12 w-auto object-contain" /></Link>
                <Link to={"/"} className="whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.24em] text-[#403d38]">Mathrushree Bhavana</Link>
            </div>

            <Link to={"/cart"} className="flex items-center gap-1 text-[#403d38]" aria-label="View cart">
                <img src={cartIcon} alt="" className="h-6 w-6 object-contain"/>
                <span className="min-w-4 text-center text-xs">{cart.length}</span>
            </Link>

        </nav>
    );
};

export default NavBar;
