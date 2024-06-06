"use client";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

export const NavbarComponent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "HOME", href: "Home" },
        { name: "ABOUT US", href: "About-us" },
        { name: "SERVICES", href: "services" },
        { name: "CONTACT US", href: "contact-us" },
    ];

    return (
        <Navbar className="fixed z-10 bg-white p-3 w-full">
            <NavbarContent>
                <button
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden p-2 rounded"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-16 md:py-4 sm:py-2 z-10" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            href={`#${item.href}`}
                            className={`hover:text-custom-green ${item.name === "CONTACT US" ? "bg-custom-green text-white hover:bg-white hover:text-custom-green md:p-2 rounded-2xl" : ""}`}
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
                                href={`#${item.href}`}
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
