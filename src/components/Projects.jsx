import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div
            id="projects-wrapper"
            className="bg-gray-900 text-white min-h-screen py-16 pt-32 md:pt-48 flex flex-col items-center"
        >
            <h2
                data-aos="fade-down"
                className="text-5xl md:text-6xl font-bold text-blue-300 mb-8"
            >
                <span className="text-yellow-300 text-5xl">02 </span> My Work
            </h2>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="md:w-1/2 md:text-left mb-8 md:mb-0">
                    <img
                        data-aos="zoom-in-left"
                        src="./src/assets/calculatorProject.png"
                        alt="calculator-img"
                        className="rounded-lg shadow-lg mx-auto h-auto max-h-96"
                    />
                </div>
                <div className="md:w-1/2 md:ml-8">
                    <p data-aos="fade-right" className="font-outfit text-xl md:text-2xl">
                        My first project was a calculator. It consisted of 4 functions: Multiply, Divide, Subtract, and Add. It was mainly made for me to test out Javascript with HTML & CSS, and I used basic DOM manipulation to do it. By making this app, I learned how to access elements from the DOM, and this helped me learn react.js in the future. You can access it here:
                        <br className="my-8 md:hidden" />
                        <br className="my-8 md:hidden" />
                        <a href="https://github.com/chickfilaman51/Calculator-App" target="_blank" className="underline text-blue-500">
                            https://github.com/chickfilaman51/Calculator-App
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
