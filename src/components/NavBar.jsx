"use client"; // for client side animations or icons we need to add this use client.
import Link from "next/link";
import NavLink from "@/components/NavLink";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "@/components/MenuOverlay";

const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
    const navlinks = [
        {
            title: "About",
            path: "#about",
        },
        {
            title: "Projects",
            path: "#projects",
        },
        {
            title: "Contact",
            path: "#contact",
        },
    ]
    return (
        <nav className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100`}>
            <div className={`flex container flex-wrap items-center justify-between mx-auto px-4 py-2`}>
                <Link className={`max-lg:text-3xl text-5xl text-white font-semibold`} href={`/`}>AK</Link>
                <div className={`mobile-menu block lg-max:hidden`}>
                    {!navbarOpen ? (
                            <button onClick={() => setNavBarOpen(!navbarOpen)}
                                    className={`flex items-center lg:hidden px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white cursor-pointer`}>
                                <Bars3Icon className={`h-5 w-5`}/>
                            </button>
                        ) :
                        (
                            <button onClick={() => setNavBarOpen(!navbarOpen)}
                                    className={`flex items-center lg:hidden px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white cursor-pointer`}>
                                <XMarkIcon className={`h-5 w-5`}/>
                            </button>
                        )
                    }
                </div>
                <div className={`menu max-lg:hidden w-auto block`} id={`navbar`}>
                    <ul className={`flex p-4 flex-row space-x-8`}>
                        {navlinks.map((link, index) => (
                            <li key={index}><NavLink href={link.path} title={link.title}/></li>
                        ))}

                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navlinks}/> : null}
        </nav>
    )
}
export default NavBar;