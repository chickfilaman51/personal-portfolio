import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div
            id="about-wrapper"
            className="bg-gray-900 text-white min-h-screen py-16 flex flex-col justify-center items-center"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="md:w-4/5 text-center md:text-left mb-8 md:mb-0">
                    <h2
                        data-aos="fade-right"
                        className="text-5xl md:text-6xl font-bold mb-6 text-blue-300"
                    >
                        <span className="checkpoint text-5xl text-yellow-300">01</span> About Me
                    </h2>
                    <p data-aos="fade-right" className="font-outfit text-xl md:text-2xl leading-relaxed">
                        Hello! My name is Krish! I am a passionate mathematician at heart and love to solve problems from competitions like the AMC10 and AIME in my free time! I also love coding, which inspired me to make this website!
                        <br />
                        <br />
                        I made this platform to help people learn competition math through short videos and problems! I also wanted to inform people of cool strategies and formulas through blogs.
                        <br />
                        <br />
                        Outside of the time I am doing math, I am also playing tennis, playing the piano, and learning more about coding in general.
                    </p>
                </div>
                <div className="md:w-4/5 ml-9">
                    <img
                        data-aos="zoom-in-left"
                        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_470493341_20001333200092800_398689.jpg"
                        alt="math-image"
                        className="rounded-lg shadow-lg mx-auto h-auto max-h-96"
                    />
                </div>
            </div>

        </div>
    );
}
