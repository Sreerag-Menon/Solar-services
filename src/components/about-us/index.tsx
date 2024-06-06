import { inter, lato } from "@/utils/fonts";
import { ScrollCard } from "./scroll-card";
import Image from "next/image";

export const AboutUs: React.FC = () => {
    const images = [
        "/Adani Group_idSyqcL_Ea_1.svg",
        "/cp-plus.svg",
        "/hikvision-logo.svg",
        "/panasonic.svg",
        "/havells-logo.svg",
        "/164762.svg",
        "/exide-1.svg"
    ].map((image) => ({
        id: crypto.randomUUID(),
        image
    }));

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center absolute md:top-44 px-4 sm:px-0 top-24">
                <h3 className={`text-4xl sm:text-6xl md:text-8xl font-bold text-custom-green mb-4 ${inter.className} ${lato.style} text-center`}>
                    Why You Should Choose Us?
                </h3>
                <p className={`text-gray-600 w-full sm:w-3/4 text-center ${lato.className} text-base sm:text-lg`}>
                    With years of experience in the industry, we have established ourselves as a trusted partner for homeowners and businesses seeking reliable and cutting-edge solutions.
                </p>
                <div className="md:mt-16 flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 md:space-x-24 mt-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                        <Image
                            src="/trophy-svgrepo-com.svg"
                            alt="trophy"
                            width={40}
                            height={40}
                            className="sm:w-12 sm:h-12"
                        />
                        <h4 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 mt-3 text-center">NO.1 in Kerala</h4>
                        <p className="text-gray-500 text-center text-sm sm:text-base">We are the number one authorized company in Kerala</p>
                    </div>
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                        <Image
                            src="/icons8-handshake-50.png"
                            alt="trophy"
                            width={40}
                            height={40}
                            className="sm:w-12 sm:h-12"
                        />
                        <h4 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 mt-3 text-center">540+ Works Completed</h4>
                        <p className="text-gray-500 text-center text-sm sm:text-base">A group of people with passion towards green energy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/icons8-checked-50.png"
                            alt="trophy"
                            width={40}
                            height={40}
                            className="sm:w-12 sm:h-12"
                        />
                        <h4 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 mt-3 text-center">64 Major Clients</h4>
                        <p className="text-gray-500 text-center text-sm sm:text-base">We are the number one authorized company in Kerala</p>
                    </div>
                </div>
                <h4 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-custom-green md:mt-16 mt-8 mb-4 md:mb-8">MAJOR CLIENTS</h4>
                <ScrollCard images={images} speed={5000} />
            </div>
        </div>
    );
};