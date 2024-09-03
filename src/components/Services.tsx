import React, { useState } from 'react';
import Kamar from './Interact';  // Assuming App component is in the same directory

const Services: React.FC = () => {
  // State to control the visibility of the App overlay
  const [showAppOverlay, setShowAppOverlay] = useState(false);

  // Function to toggle the App overlay
  const toggleAppOverlay = () => {
    setShowAppOverlay(!showAppOverlay);
  };

  return (
    <div className="text-center bg-gray-200 py-4 mt-10 relative">
      <p className="text-lg italic font-semibold">
        “There’s no silver bullet with cybersecurity; a layered defense is the only viable option.” — James Scott.
      </p>
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={toggleAppOverlay}
      >
        Show Full Page
      </button>

      {showAppOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-full w-full h-full overflow-auto">
            <Kamar />
            <button 
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
              onClick={toggleAppOverlay}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
