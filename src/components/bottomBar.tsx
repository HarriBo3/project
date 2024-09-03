import React from 'react';

interface NavbarProps {
  onChangeContent: (content: string) => void;
}

const bottomBar: React.FC<NavbarProps> = ({ onChangeContent }) => {
  return (
    <nav className="bg-blue-500 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <button
              onClick={() => onChangeContent('home')}
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => onChangeContent('about')}
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => onChangeContent('services')}
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => onChangeContent('contact')}
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
