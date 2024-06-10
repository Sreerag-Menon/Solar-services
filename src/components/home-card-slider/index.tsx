import { Carousel } from 'antd';
import Image from 'next/image';
import firstImage from '../../../public/images/markus-winkler-VX0ZEZSwqnY-unsplash.jpg';
import secondImage from '../../../public/images/a-sleek-biometric-fingerprint-scanner-mounted-on-a-cr7b2aMPQ_iZtf4EHN5JDQ-faVvdFk0QvyHnTmDm77zmw.jpeg';
import thirdImage from '../../../public/images/a-realistic-image-of-a-futuristic-smart-home-showc-8h8IzpfZRK--UAq2BAHUCQ-8TY_xr96RWm-jvgAauSYAQ.jpeg';
import fourthImage from '../../../public/images/stephan-bechert-yFV39g6AZ5o-unsplash.jpg';
import fifthImage from '../../../public/images/sacha-t-sas-mVPkezDvRy8-unsplash.jpg';
import { inter, lato } from '@/utils/fonts';
import { Link } from '@nextui-org/react';

const carouselDetails = [{
    image: firstImage,
    heading: "EMPOWER YOUR HOME WITH SOLAR",
    text: "We offer customized solar panel installation solutions tailored to meet the unique needs and requirements of each client."
}, {
    image: secondImage,
    heading: "UNLOCK THE FUTURE OF SECURITY",
    text: "We offer cutting-edge fingerprint scanner installation services that redefine the way you protect your assets and safeguard your premises"

},
{
    image: thirdImage,
    heading: "UNLOCK THE FUTURE OF SMART LIVING",
    text: " We offer customized home automation installations tailored to your unique lifestyle and preferences."

},
{
    image: fifthImage,
    heading: "ELEVATE YOUR SECURITY WITH CCTV INSTALLATIONS",
    text: "With years of industry experience and a team of highly trained professionals, we offer customized CCTV solutions tailored to the unique security requirements of your residential or commercial property."

}


]
export const HomeCardSlider: React.FC = () => {
    return (
        <Carousel autoplay className='h-screen'>
            {carouselDetails.map((details) => (
                <div className='relative h-screen' key={details.heading}>
                    <div className='w-full h-full overlay'>
                        <Image src={details.image} alt='image' className='w-full h-full object-cover' />
                    </div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-4'>
                        <h2 className={`text-white text-5xl md:text-7xl md:text-center capitalize font-semibold ${lato.className}`}>
                            {details.heading}
                        </h2>
                        <p
                            className={`text-gray-200 text-sm md:text-base py-5 font-thin text-center w-full md:w-1/2  ${inter.className}`}
                        >
                            {details.text}
                        </p>
                        <Link href='#services'
                            className='hover:text-black hover:bg-gray-200 px-3 text-center my flex items-center justify-center rounded-md hover:border-none bg-transparent border border-gray-100 w-28 md:w-32 h-10 text-white'
                        >
                            Know More
                        </Link>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};