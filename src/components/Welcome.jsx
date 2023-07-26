import React from 'react';
import { Link } from 'react-scroll';

export default function Welcome() {
    return (
        <div
            id="welcome-section"
            className="bg-gray-900 text-white min-h-screen py-24 flex flex-col items-center justify-center"
        >
            <h1 className="text-6xl font-bold mb-6">Hi There, I'm Krish 👋</h1>
            <p className="text-xl">A passionate mathematician and coder</p>
            <div className="intro-button-holder mt-12 space-x-4">
                <Link
                    activeClass="active"
                    to="about-wrapper"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="intro-button px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-300"
                >
                    About Me
                </Link>
                <Link
                    activeClass="active"
                    to="projects-wrapper"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="intro-button px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-300"
                >
                    My Work
                </Link>
            </div>
  
        </div>
    );
}
