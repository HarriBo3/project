import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      content: "Sex-tortion in New Zealand is on the rise, the main target are males 16 to 20, who are around 91% of that statistic. With an average of 32 reports to NetSafe and the Police per week this issue is very important.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtf7-sFivEeRE7bc3gNm8a0aRQy8TgnTJIz8km3wCziqQJ5iW4e-Uxl5xC0u_18s19rE&usqp=CAU",
      modalContent: `Sex-tortion or sexual extortion is when you are tricked into sending, or photoshopped into appearing as if you sent a picture or video of yourself in an exposing manner and then you are threatened to have it leaked to family, friends, or generally online which may be used either to get you to send more images or pay for it not to be leaked. This can often continue for weeks or months as the extorter has no reason to stop the threats. If you are a victim of sex-tortion or know someone who is then contact the New Zealand Police at https://www.police.govt.nz/contact-us/stations, or call the Police non-emergency number at '105' or contact NetSafe.`
    },
    {
      id: 2,
      content: "Scams can happen to anyone, but the most common people it happens to is young people who are just getting money for the first time or older people who either aren't aware or think that they could never be scammed.",
      imgSrc: "https://t3.ftcdn.net/jpg/06/35/51/74/360_F_635517480_eOPPiYCtOUIQp7wpnGzOA2ptGUzZC1p9.jpg",
      modalContent: "Scams are constantly evolving but the most common scam type you will see is the call centre model, "
    },
    {
      id: 3,
      content: "Password strength .",
      imgSrc: "https://via.placeholder.com/100",
      modalContent: "Detailed content for section 3. Donec lobortis lacus et sem elementum."
    }
  ]);
  const [activeSection, setActiveSection] = useState(null);
  const [isCookieBarVisible, setIsCookieBarVisible] = useState(true);

  const handleSectionClick = section => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  const handleCookieBarClose = () => {
    setIsCookieBarVisible(false);
  };

  return (
    <div>
      {/* Navbar Component would go here */}

      {/* Quote Section */}
      <div className="text-center bg-gray-200 py-4 mt-10">
        <p className="text-lg italic font-semibold">
          “There’s no silver bullet with cybersecurity; a layered defense is the only viable option.” — James Scott.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-start w-full bg-gray-400 absolute left-0 right-0 mt-10">
        <ScrollArea className="border border-white flex flex-col items-center justify-center p-5 m-2 w-1/2 h-72">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <div className="flex items-start mb-4 w-full cursor-pointer" onClick={() => handleSectionClick(section)}>
                <img src={section.imgSrc} alt="section image" className="w-24 h-24 mr-4" />
                <div>{section.content}</div>
              </div>
              {index < sections.length - 1 && <hr className="border-t w-full my-4" />}
            </React.Fragment>
          ))}
        </ScrollArea>

        {activeSection && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full">
              <h2 className="text-lg font-bold mb-4">Section Details</h2>
              <p>{activeSection.modalContent}</p>
              <button onClick={handleClose} className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">Close</button>
            </div>
          </div>
        )}
      </div>

      {/* Cookie Bar */}
      {isCookieBarVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 flex justify-between items-center">
          <span>Legal Disclaimer: This site is intended as a basic informative site, it is not perfect and you should conduct your own further research.</span>
          <button onClick={handleCookieBarClose} className="ml-4 py-1 px-3 bg-red-500 rounded hover:bg-red-700">Close</button>
        </div>
      )}
    </div>
  );
};

export default Home;
