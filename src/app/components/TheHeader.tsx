"use client";

import Link from "next/link";
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faMoon} from "@fortawesome/free-solid-svg-icons";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import {useRouter} from "next/navigation";
import {useLocale} from "use-intl";

export default function TheHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();

    const getLocalePath = (path:string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };

    return (
        <nav className="bg-gray-800 top-0 z-50 sticky">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-white font-bold text-xl">Brand</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href={getLocalePath(`/`)}>
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</span>
                            </Link>
                            <Link href={getLocalePath(`/about`)}>
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</span>
                            </Link>
                            <Link href={getLocalePath(`/services`)}>
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</span>
                            </Link>
                            <Link href={getLocalePath(`/portfolio`)}>
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</span>
                            </Link>
                            <Link href={getLocalePath(`/contacts`)}>
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</span>
                            </Link>
                            <Link href={getLocalePath(`/register`)}>
                                <span className="btn">join now</span>
                            </Link>
                            <LocaleSwitcher/>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href={getLocalePath(`/`)}>
                            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</span>
                        </Link>
                        <Link href={getLocalePath(`/about`)}>
                            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</span>
                        </Link>
                        <Link href={getLocalePath(`/services`)}>
                            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</span>
                        </Link>
                        <Link href={getLocalePath(`/portfolio`)}>
                            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</span>
                        </Link>
                        <Link href={getLocalePath(`/contacts`)}>
                            <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}