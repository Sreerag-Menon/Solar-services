"use client";
import React, { useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Image from "next/image";

export const NavbarComponent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobile,setIsMobile]=React.useState(false)

    const menuItems = [
        { name: "HOME", href: "Home" },
        { name: "ABOUT US", href: "About-us" },
        { name: "SERVICES", href: "services" },
        { name: "CONTACT US", href: "contact-us" },
    ];

    useEffect(()=>{
        const handleResize=()=>{
            setIsMobile(window.innerWidth<=768);
        }
        handleResize()

        window.addEventListener('resize',handleResize)

        return(()=>{
            window.removeEventListener('resize',handleResize)
        })
    },[])

    
    return (
        <Navbar className="fixed  bg-white p-3 w-full z-20">
            <NavbarContent>
                <button
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden p-2 rounded"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>
                <NavbarBrand>
                    <div className="flex items-center">
                        <Image src='/logo/logo.png' alt="logo" width={50} height={50}  className="w-7 h-6 sm:w-8 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-10 md:ml-2  " />
                        <p className="font-bold  ml-2 sm:ml-3 md:ml-5  text-sm sm:text-sm    md:text-xl lg:text-2xl">
      KPMJ CONTROLS
    </p>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex sm:gap-8 md:gap-16 md:py-4 sm:py-2 z-10" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            href={`#${item.href}`}
                            className={`hover:text-custom-green ${item.name === "CONTACT US" ? "bg-custom-green text-white hover:bg-white hover:text-custom-green p-1  md:p-2 rounded-2xl" : ""}`}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {isMenuOpen && (
                <div className="sm:hidden bg-white p-4 fixed top-0 left-0 w-full z-20 mt-12">
                    {menuItems.map((item, index) => (
                        <div key={index} className="py-2">
                            <Link
                                href={`${item.name==="CONTACT US"?`tel:+919061456531`:`#${item.href}`}` }
                                className={`block text-lg ${item.name === "CONTACT US" ? "bg-custom-green text-white hover:bg-white hover:text-custom-green p-2 rounded-2xl" : "hover:text-custom-green"}`}
                                onClick={() => setIsMenuOpen(false)} // Close the menu on item click
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </Navbar>
    );
};
