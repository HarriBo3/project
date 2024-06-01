import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 fixed top-0 w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link href="/" legacyBehavior>
                            <a className="text-white font-bold text-xl">My Website</a>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="#home" legacyBehavior>
                                    <a className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                </Link>
                                <Link href="#about" legacyBehavior>
                                    <a className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                </Link>
                                <Link href="#services" legacyBehavior>
                                    <a className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                </Link>
                                <Link href="#contact" legacyBehavior>
                                    <a className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Placeholder for any future additions */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
