"use client";

import Image from "next/image";
import React from "react";
import './about.css';

interface ScrollCardProps {
    images: { id: string; image: string }[];
    speed?: number;
}

export const ScrollCard: React.FC<ScrollCardProps> = ({ images, speed = 5000 }) => {
    return (
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image src={image} alt={id} width={150} height={150} className="Image" />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image src={image} alt={id} width={150} height={150} className="Image" />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image src={image} alt={id} width={150} height={150} className="Image" />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};
