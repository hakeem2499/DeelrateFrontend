'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import ThemeToggleSwitch from '../ThemeSwitch';
import Brand from '../ui/Brand';
import { motion } from 'motion/react';
import { HoverBorderGradient } from '../ui/HoverBoderGradient';

export const AnimatedHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    useEffect(() => {
        const animationStartPoint = window.innerHeight * 0.5;
        const handleScroll = () => setScrolled(window.scrollY > animationStartPoint);

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isSideBarOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isSideBarOpen]);

    return (
        <>
            <header className={clsx('header fixed top-0 left-0 w-full z-60', scrolled && 'scrolled')}>
                <nav className='flex justify-between h-fit items-center w-full'>
                    <Brand />
                    <div className="menu inline-flex justify-between items-center gap-4 py-4 p-2 md:px-12">
                        <ThemeToggleSwitch />
                        <button
                            className={clsx('burger-btn group', isSideBarOpen && "is-closed")}
                            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                            aria-expanded={isSideBarOpen}
                        >
                            <span className="sr-only">{isSideBarOpen ? "Close" : "Open"} menu</span>
                            <span className={clsx('mt-6', isSideBarOpen ? 'flex text-xs group-hover:text-amber-100 transition-colors duration-200' : 'hidden')}>CLOSE</span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Move aside outside of header */}
            <aside className={clsx(

                isSideBarOpen && 'open  pointer-events-auto'
            )}>
                <div className="absolute inset-0 flex">
                    <div className="aside-section aside-left w-1/2 bg-slate-950 not-dark:bg-foreground h-full">
                        <div className="aside-content items-center flex flex-col gap-8 justify-center h-full">
                            <p className="text-4xl text-center-text-balance font-semibold">
                                Own a Piece of the Future
                            </p>
                            <HoverBorderGradient onClick={() => { window.location.href = '/'; }}
                            >


                                <span>Save a Seat</span>

                            </HoverBorderGradient>
                        </div>
                    </div>
                    <div className="aside-section aside-right w-1/2 bg-white h-full">
                        <ul className="aside-list">
                            <li><Link href="/" className="aside-anchor">Link</Link></li>
                            <li><Link href="/" className="aside-anchor">Link</Link></li>
                            <li><Link href="/" className="aside-anchor">Link</Link></li>
                            <li><Link href="/" className="aside-anchor">Link</Link></li>
                        </ul>
                    </div>
                </div>
            </aside>

            {/* Overlay for when aside is open */}
            {isSideBarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-transparent bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setIsSideBarOpen(false)}
                />
            )}
        </>
    );
};