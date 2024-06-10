"use client";
import { InstagramIcon, PhoneIcon, Whatsapp } from "@/utils/svg";
import { Link } from "@nextui-org/react"
import Image from "next/image"
import { useState } from "react";



export const Footer: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const phoneNumber = '+918921565767'; // Replace with the desired phone number
  
    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        alert("Phone number copied to clipboard!")        
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      } catch (err) {
        console.error('Failed to copy phone number: ', err);
      }
    };
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800  " id='contact-us'>
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex">

                        <Image src="/logo/kpmj controls logo without text.png" width={40} height={40} className="mr-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KPMJ CONTROLS</span>

                    </div>
                    <div className="grid  gap-6 grid-cols-3">
                        <div>
                            <Link className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" href='#Home'>Home</Link>

                        </div>
                        <div>
                            <Link className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" href="#About-us">About us</Link>

                        </div>
                        <div>
                            <Link className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" href="#Services">Services</Link>

                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 KPMJ Services. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link className="text-gray-500 hover:text-gray-900 dark:hover:text-white" onClick={handleClick}>
                            <PhoneIcon/>
                        </Link>
                        <Link href="#Home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <InstagramIcon/>
                        </Link>
                        <Link href="#Home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Whatsapp/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}