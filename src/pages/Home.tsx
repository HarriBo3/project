import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Section = {
  id: number;
  content: string;
  imgSrc: string;
  modalContent: string;
};

const Home: React.FC = () => {
  const [sections] = useState<Section[]>([
    {
      id: 1,
      content:
        "Sex-tortion in New Zealand is on the rise, targeting males 16 to 20. They make up 91% of cases, with an average of 32 reports to NetSafe and the Police per week. Aenean tempor lacinia euismod. Cras sagittis maximus sem et congue. Nulla velit mi, faucibus et facilisis sit amet, semper eget dui. Curabitur non mauris aliquet, accumsan sapien ultricies, pretium elit. Nunc mattis rhoncus ligula, a dignissim lacus lacinia sed.",
      imgSrc:
        "https://via.placeholder.com/100",
      modalContent: `Sex-tortion, or sexual extortion, occurs when someone is tricked into sending explicit material or manipulated into appearing as though they did, and then blackmailed for further content or money. Victims should contact the New Zealand Police at https://www.police.govt.nz/contact-us/stations, call 105, or reach out to NetSafe.`,
    },
    {
      id: 2,
      content:
        "Scams target both the young and elderly. Young people may be scammed when they start earning money, while older individuals may be less tech-savvy. Aenean tempor lacinia euismod. Cras sagittis maximus sem et congue. Nulla velit mi, faucibus et facilisis sit amet, semper eget dui. Curabitur non mauris aliquet, accumsan sapien ultricies, pretium elit. Nunc mattis rhoncus ligula, a dignissim lacus lacinia sed.",
      imgSrc:
        "https://via.placeholder.com/100",
      modalContent:
        "The most common type of scam is the call centre scam, where scammers impersonate service providers, claiming issues with your internet or bank account to obtain personal details. Aenean tempor lacinia euismod. Cras sagittis maximus sem et congue. Nulla velit mi, faucibus et facilisis sit amet, semper eget dui. Curabitur non mauris aliquet, accumsan sapien ultricies, pretium elit. Nunc mattis rhoncus ligula, a dignissim lacus lacinia sed.",
    },
    {
      id: 3,
      content: "Password Strength",
      imgSrc: "https://via.placeholder.com/100",
      modalContent:
        "Your password is your first line of defence in cybersecurity. Use a mix of letters, numbers, and symbols for maximum security.",
    },
    {
      id: 4,
      content: "Benefits of MFA",
      imgSrc: "https://via.placeholder.com/100",
      modalContent:
        "Multi-Factor Authentication (MFA) adds an extra layer of security by requiring additional verification beyond just a password.",
    },
    {
      id: 5,
      content: "Hardware-based MFA",
      imgSrc: "https://via.placeholder.com/100",
      modalContent:
        "Hardware-based MFA uses physical devices like security tokens for authentication, offering enhanced protection against cyber threats.",
    },
    {
      id: 6,
      content: "Proper password cycling",
      imgSrc: "https://via.placeholder.com/100",
      modalContent:
        "Regularly updating your passwords reduces the risk of unauthorized access from compromised credentials.",
    },
  ]);

  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [isCookieBarVisible, setIsCookieBarVisible] = useState(true);
  const [isCookieModalVisible, setIsCookieModalVisible] = useState(false);

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  const handleCookieBarClose = () => {
    setIsCookieBarVisible(false);
  };

  const handleCookieBarMoreInfo = () => {
    setIsCookieModalVisible(true);
  };

  const handleCookieModalClose = () => {
    setIsCookieModalVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Quote Section */}
      <div className="text-center bg-gray-200 py-4">
        <p className="text-lg italic font-semibold mt-10">
          “There’s no silver bullet with cybersecurity; a layered defence is the
          only viable option.” — James Scott.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-start w-full mt-10">
        <ScrollArea className="border border-white flex flex-col items-center justify-start p-5 m-2 w-full h-full bg-white shadow-md rounded-lg overflow-y-auto">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <div
                className="flex items-start mb-4 w-full cursor-pointer p-4 hover:bg-gray-100 transition-all rounded-md"
                onClick={() => handleSectionClick(section)}
              >
                <img
                  src={section.imgSrc}
                  alt="section image"
                  className="w-24 h-24 mr-4 object-cover rounded"
                />
                <div>{section.content}</div>
              </div>
              {index < sections.length - 1 && (
                <hr className="border-t w-full my-4" />
              )}
            </React.Fragment>
          ))}
        </ScrollArea>

        {/* Section Modal */}
        {activeSection && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-10">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full shadow-lg">
              <h2 className="text-lg font-bold mb-4">Section Details</h2>
              <p>{activeSection.modalContent}</p>
              <button
                onClick={handleClose}
                className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Cookie Bar Modal */}
        {isCookieModalVisible && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-10">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full shadow-lg">
              <h2 className="text-lg font-bold mb-4">Legal Disclaimer</h2>
              <p>The information provided on this website is for general informational purposes only. While we strive to ensure that the content is accurate and up to date, we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, services, or related graphics contained on the site for any purpose. Any reliance you place on such information is strictly at your own risk.</p>
              <p className="mt-2">We do not offer professional legal, technical, or cybersecurity advice. For specific concerns related to cybersecurity, we recommend consulting a qualified professional. By using this website, you agree that we are not liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising from or in connection with the use of this website.</p>
              <p className="mt-2">This site may contain links to external websites that are not operated by us. We have no control over the content or availability of those sites and accept no responsibility for any loss or damage that may arise from your use of them.</p>
              <p className="mt-2">All content is subject to change without notice.</p>
             
              <button
                onClick={handleCookieModalClose}
                className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cookie Bar */}
      {isCookieBarVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 flex justify-between items-center shadow-lg">
          <span>
            Legal Disclaimer: This site is intended for general information and
            does not constitute legal advice. Research independently. By using this site you agree to these terms.
          </span>
          <div className="ml-4 flex">
            <button
              onClick={handleCookieBarMoreInfo}
              className="mr-2 py-1 px-3 bg-green-500 rounded hover:bg-green-700"
            >
              More Info
            </button>
            <button
              onClick={handleCookieBarClose}
              className="py-1 px-3 bg-red-500 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
