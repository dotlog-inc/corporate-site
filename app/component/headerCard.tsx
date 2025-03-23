"use client"

import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link" ;

const HeaderCard = () => {
        const [isWide, setIsWide] = useState<boolean>(false);
    
        useEffect(() => {
        // 初回レンダリング時 & リサイズ時に横幅を判定
        const checkWidth = () => {
            setIsWide(window.innerWidth >= 768);
        };
    
        checkWidth(); // 初回判定
        window.addEventListener("resize", checkWidth);
    
        return () => window.removeEventListener("resize", checkWidth);
        }, []);

        const [isOpen, setIsOpen] = useState(false);
    

    return (
    <header className="sticky top-0 flex mx-6 h-[88px]">
            <h1 className="font-body text-sky-500 font-[1000] inline-block text-2xl my-4 flex items-center justify-center">Dot Log inc.</h1>
            {isWide ? 
            <div className="font-body inline-block font-bold text-sky-500 ml-auto flex items-center">
                <Link href="" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">TOP</Link>
                <Link href="#philo" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">PHILOSOPHY</Link>
                <Link href="#service" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">SERVICE</Link>
                <Link href="#news" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">NEWS</Link>
                <Link href="#about" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">ABOUT</Link>
                <Link href="#contact" className="text-base lg:text-lg inline-block px-3 py-4 relative hover:scale-90 duration-200">CONTACT</Link>
            </div>
            :
            <div className="ml-auto flex items-center">
                <div className="">
                    <button
                        className="flex flex-col space-y-1 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-8 h-1 bg-sky-500"></div>
                        <div className="w-8 h-1 bg-sky-500"></div>
                        <div className="w-8 h-1 bg-sky-500"></div>
                    </button>
                </div>
            
                {/* メニュー表示 */}
                {isOpen && (
                    <nav className="absolute top-16 left-0 w-full bg-white shadow-lg p-4">
                    <ul className="space-y-2">
                        <li><a href="/" className="block">HOME</a></li>
                        <li><a href="#philo" className="block">PHILOSOPHY</a></li>
                        <li><a href="#service" className="block">SERVICE</a></li>
                        <li><a href="#about" className="block">ABOUT</a></li>
                        <li><a href="#news" className="block">NEWS</a></li>
                        <li><a href="#contact" className="block">CONTACT</a></li>
                    </ul>
                    </nav>)}
            </div>

            }
        </header>
    )
}

export default HeaderCard