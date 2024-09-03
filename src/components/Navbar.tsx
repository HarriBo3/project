import React from 'react';

interface NavbarProps {
  onChangeContent: (content: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeContent }) => {
  return (
<<<<<<< HEAD
    <nav className="bg-slate-500 fixed top-0 w-full z-50 shadow-lg">
=======
    <nav className="bg-slate-700 fixed top-0 w-full z-50 shadow-lg">
>>>>>>> 07b1691 (Remaking)
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24"> {/* Adjusted height */}
          <p className="px-8 text-xl text-white">CyberSafe</p>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

            <p className="text-white font-large">CyberSafe</p>
            <button
              onClick={() => onChangeContent('home')}
<<<<<<< HEAD
              className="text-white hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
=======
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> 07b1691 (Remaking)
            >
              Home
            </button>
            <button
              onClick={() => onChangeContent('about')}
<<<<<<< HEAD
              className="text-white hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
=======
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> 07b1691 (Remaking)
            >
              About
            </button>
            <button
              onClick={() => onChangeContent('services')}
<<<<<<< HEAD
              className="text-white hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
=======
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> 07b1691 (Remaking)
            >
              Web Builder
            </button>
            <button
              onClick={() => onChangeContent('contact')}
<<<<<<< HEAD
              className="text-white hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
=======
              className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> 07b1691 (Remaking)
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
