"use client";
import React, { useState, useEffect } from 'react';

interface GalleryProps {
    images: { image: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="relative sm:w-1/2 md:w-3/4 h-[400px] sm:h-[500px] md:h-[200px] lg:h-[300px] xl:h-[500px] rounded-lg shadow-lg overflow-hidden">
            {images.map(({ image }, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : ''}`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}
        </div>
    );
};

export default Gallery;
