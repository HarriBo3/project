import React from 'react';

interface NavbarProps {
  onChangeContent: (content: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeContent }) => {
  return (

    <nav className="bg-slate-700 fixed top-0 w-full z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24"> {/* Adjusted height */}
          <p className="px-8 text-xl text-white">CyberSafe</p>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <button
              onClick={() => onChangeContent('home')}
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

            >
              Home
            </button>
            <button
              onClick={() => onChangeContent('about')}
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>       

            <button
              onClick={() => onChangeContent('password')}
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

            >Password Tester


            </button>

            <button
              onClick={() => onChangeContent('interactables')}

              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

            >
              Interactable
            </button>
          
            <button
              onClick={() => onChangeContent('contact')}
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
