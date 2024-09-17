import React, {Suspense} from 'react'
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import {Leva, useControls} from "leva";
import JavaLogo from "../components/JavaLogo.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import Webdev from "../components/Webdev.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{fontFamily: 'Merriweather, serif'}}>
                        <span className="text-black_gradient">Hello, I'm Siri</span> <span className="waving-hand">👋</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-black_gradient">
                        Software Developer | MSCS Student
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-8">
                        <p className="text-lg mb-4">
                            I'm currently pursuing a Master's in Computer Science (MSCS) at Northeastern University,
                            with an expected graduation in 2025. Alongside my studies, I'm working as a Software Engineer at Quickbase.
                        </p>
                        <p className="text-lg mb-4">
                            I'm excited to be attending the Grace Hopper Celebration '24. Let's connect on{' '}
                            <a href="https://www.linkedin.com/in/sirisrinivasa" target="_blank" rel="noopener noreferrer"
                               className="text-blue-600 hover:text-blue-800 underline">
                                LinkedIn
                            </a>.
                        </p>
                        <p className="text-lg">
                            For a comprehensive overview of my experience, feel free to check out my{' '}
                            <a href="../../public/assets/SiriSrinivas_Resume.pdf" target="_blank" rel="noopener noreferrer"
                               className="text-blue-600 hover:text-blue-800 underline">
                                resume
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full absolute right-0 top-0">
                <Leva/>
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <group scale={0.8}>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <JavaLogo position={sizes.javaLogoPosition}/>
                            <PythonLogo position={sizes.pythonLogoPosition}/>
                            <Webdev position={sizes.webdevPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's Connect" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero


