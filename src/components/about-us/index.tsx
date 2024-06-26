import { inter, lato } from "@/utils/fonts";
import { ScrollCard } from "./scroll-card";
import Image from "next/image";
import Gallery from "../gallery-showcase";

export const AboutUs: React.FC = () => {
    const images = [
        "/brand-icons/Adani Group_idSyqcL_Ea_1.svg",
        "/brand-icons/cp-plus.svg",
        "/brand-icons/hikvision-logo.svg",
        "/brand-icons/panasonic.svg",
        "/brand-icons/havells-logo.svg",
        "/brand-icons/aamaron.svg",
        "/brand-icons/exide-1.svg"
    ].map((image) => ({
        id: crypto.randomUUID(),
        image
    }));

    const galleryImages = [
        { image: '/projects/0954ce3d-d298-4f1a-82c0-17bd2f74915e.jpeg' },
        { image: '/projects/1f88db2b-7b50-4dc0-abf4-d03d3b750b8c.jpeg' },
        { image: '/projects/f00b19f2-a280-4603-af33-4b857ef6197a.jpeg' }
    ];

    return (
        <div className="w-full flex flex-col items-center md:pt-20 pt-5  px-4 sm:px-0" id="About-us">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start">
                <section className="w-full lg:w-3/4 flex flex-col lg:ml-8">
                    <div className="w-full flex flex-col items-center">
                        <h3 className={`text-4xl  md:text-6xl lg:text-7xl font-bold text-custom-green mb-1 md:mb-4 ${inter.className} ${lato.style} text-center`}>
                            Why You Should Choose Us?
                        </h3>
                        <p className={`text-gray-500 w-full sm:w-3/4 ${lato.className} text-base font-normal mt-3 text-center md:text-xl mb-3`}>
                            At KPMJ Controls, we are a leading provider of cutting-edge solutions for solar services, CCTV security systems, home automation, and more. With over 4 years of experience in the industry, we have established ourselves as a trusted partner for homeowners and businesses across the state of Kerala.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 gap-9  md:mt-9 mt-6 ">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/icons/icons8-handshake-50.png"
                                alt="handshake"
                                width={40}
                                height={40}
                                className="sm:w-12 sm:h-12"
                            />
                            <h4 className={`sm:text-base md:text-3xl font-semibold md:font-medium mb-2 mt-3 text-center ${lato.className} ${lato.style}`}>50+ Works Completed</h4>
                            <p className="text-gray-600 text-center w-3/4 md:text-base text-base">With a proven track record of success, KPMJ controls has completed over 50+ projects for homeowners and businesses across Kerala</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/icons/icons8-checked-50.png"
                                alt="trusted partnership"
                                width={40}
                                height={40}
                                className="sm:w-12 sm:h-12"
                            />
                            <h4 className={`sm:text-base md:text-3xl font-semibold md:font-medium mb-2 mt-3 text-center ${lato.className} ${lato.style}`}>30+ Trusted Partnerships</h4>
                            <p className="text-gray-600 text-center w-3/4 md:text-base text-base">With over 30+ trusted partners by our side, we are confident in our ability to provide comprehensive and tailored solutions</p>
                        </div>
                    </div>
                </section>
                <section className="w-full lg:w-1/2 h-auto flex items-center justify-center hidden lg:flex">
                    <Gallery images={galleryImages} />
                </section>
            </div>

            <div className="flex flex-col items-center w-full mt-10 md:mt-13">
                <h4 className="text-2xl  md:text-5xl font-semibold text-custom-green mb-2 md:mb-8 ">MAJOR PARTNERSHIPS</h4>
                <ScrollCard images={images} speed={5000} />
            </div>
        </div>
    );
};
