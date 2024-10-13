import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Section = {
  id: number;
  content: string;
  imgSrc: string;
  modalContent: JSX.Element;
};

const Home: React.FC = () => {

  const securityTips = [
    'Use strong, unique passwords for each account.',
    'Enable two-factor authentication whenever possible.',
    'Be cautious of unsolicited emails and attachments.',
    'Keep your software and antivirus updated.',
    'Regularly back up important data.',
  ];

  const [sections] = useState<Section[]>([
    {
      id: 1,
      content:
        "Sextortion scams are increasing in New Zealand, particularly affecting males aged 16 to 20. They account for 91% of cases, with an average of 32 reports per week to NetSafe and the Police.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Sextortion in New Zealand</h2>
          <p className="mb-2">
            <strong>Sextortion</strong>, or sexual extortion, occurs when someone is coerced into sharing intimate images or videos online, which are then used to blackmail them for money or further content. This alarming trend is on the rise in New Zealand, especially among young males aged 16 to 20.
          </p>
          <h3 className="text-lg font-semibold mb-1">How It Happens:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Victims are often approached through social media or dating apps.</li>
            <li>Scammers gain trust before requesting explicit content.</li>
            <li>Once obtained, they threaten to share it publicly or with loved ones unless a ransom is paid.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">What to Do If You're Targeted:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Do Not Pay or Engage Further:</strong> Paying often leads to more demands.
            </li>
            <li>
              <strong>Preserve Evidence:</strong> Take screenshots and save all communications.
            </li>
            <li>
              <strong>Report the Incident:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Contact the New Zealand Police by visiting a local station or calling <strong>105</strong>.
                </li>
                <li>
                  Reach out to{" "}
                  <a
                    href="https://www.netsafe.org.nz/report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    NetSafe
                  </a>{" "}
                  for support and guidance.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Preventive Measures:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Be cautious when interacting with unknown individuals online.</li>
            <li>Never share intimate images or videos with people you haven't met in person.</li>
            <li>Adjust privacy settings on social media to limit who can contact you.</li>
          </ul>
          <p>
            Remember, you're not alone, and help is available. Acting quickly can prevent further harm.
          </p>
        </>
      ),
    },
    {
      id: 2,
      content:
        "Scams target both the young and elderly. Young people may be scammed when they start earning money, while older individuals may be less tech-savvy.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Common Scams Targeting Different Age Groups</h2>
          <p className="mb-2">
            Cyber scams come in various forms and can affect anyone, regardless of age.
          </p>
          <h3 className="text-lg font-semibold mb-1">Types of Scams:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Phishing Emails:</strong> Appear to be from reputable sources and aim to steal personal or financial information.
            </li>
            <li>
              <strong>Investment Scams:</strong> Promise high returns with little risk to entice individuals into fake investment opportunities.
            </li>
            <li>
              <strong>Tech Support Scams:</strong> Scammers pose as technical support, claiming your device has issues that need immediate fixing.
            </li>
            <li>
              <strong>Romance Scams:</strong> Build fake relationships online to exploit victims emotionally and financially.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Protection Tips:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Be Skeptical:</strong> Question unsolicited messages or calls requesting personal information.
            </li>
            <li>
              <strong>Verify Identities:</strong> Independently confirm the identity of the person or organization contacting you.
            </li>
            <li>
              <strong>Secure Devices:</strong> Keep software and antivirus programs up to date.
            </li>
            <li>
              <strong>Educate Yourself and Others:</strong> Stay informed about common scam techniques.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">If You Suspect a Scam:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Do Not Respond:</strong> Avoid engaging with the scammer.
            </li>
            <li>
              <strong>Report It:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Notify the New Zealand Police or{" "}
                  <a
                    href="https://www.netsafe.org.nz/report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    NetSafe
                  </a>
                  .
                </li>
                <li>Inform your bank if financial details were shared.</li>
              </ul>
            </li>
            <li>
              <strong>Warn Others:</strong> Sharing your experience can help protect others.
            </li>
          </ul>
          <p>
            Staying vigilant and informed is key to protecting yourself and your loved ones from scams.
          </p>
        </>
      ),
    },
    {
      id: 3,
      content:
        "Strong passwords are your first line of defense in cybersecurity. Using complex and unique passwords reduces the risk of unauthorized access to your accounts.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Understanding Password Strength</h2>
          <p className="mb-2">
            A strong password is crucial for protecting your online accounts from cyber threats.
          </p>
          <h3 className="text-lg font-semibold mb-1">Characteristics of a Strong Password:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Length:</strong> At least 12 characters.
            </li>
            <li>
              <strong>Complexity:</strong> Mix of uppercase and lowercase letters, numbers, and symbols.
            </li>
            <li>
              <strong>Uniqueness:</strong> Different for each account.
            </li>
            <li>
              <strong>Unpredictability:</strong> Avoid common words or easily guessable information.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Tips for Creating Strong Passwords:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Use Passphrases:</strong> Combine unrelated words with numbers and symbols (e.g., "BlueHorse77!Sunset").
            </li>
            <li>
              <strong>Avoid Personal Information:</strong> Do not use names, birthdays, or common phrases.
            </li>
            <li>
              <strong>Regular Updates:</strong> Change passwords periodically.
            </li>
          </ul>
          <p>
            Strengthening your passwords significantly reduces the risk of unauthorized access.
          </p>
        </>
      ),
    },
    {
      id: 4,
      content:
        "Multi-Factor Authentication (MFA) enhances your account security by requiring additional verification beyond just a password.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Benefits of Multi-Factor Authentication (MFA)</h2>
          <p className="mb-2">
            MFA adds extra layers of security to your accounts by requiring multiple forms of verification.
          </p>
          <h3 className="text-lg font-semibold mb-1">How MFA Works:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Something You Know:</strong> Password or PIN.
            </li>
            <li>
              <strong>Something You Have:</strong> Smartphone, security token, or smart card.
            </li>
            <li>
              <strong>Something You Are:</strong> Biometric data like fingerprints or facial recognition.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Advantages of Using MFA:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Enhanced Security:</strong> Protects even if your password is compromised.
            </li>
            <li>
              <strong>Prevents Unauthorized Access:</strong> Stops attackers without all verification factors.
            </li>
            <li>
              <strong>Peace of Mind:</strong> Adds confidence that your accounts are secure.
            </li>
          </ul>
          <p>
            By incorporating MFA, you significantly reduce the risk of cyber threats.
          </p>
        </>
      ),
    },
    {
      id: 5,
      content:
        "Hardware-based MFA uses physical devices like security tokens for authentication, offering enhanced protection against cyber threats.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Understanding Hardware-Based MFA</h2>
          <p className="mb-2">
            Hardware-based MFA involves using a physical device to authenticate your identity.
          </p>
          <h3 className="text-lg font-semibold mb-1">Types of Hardware Tokens:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>USB Security Keys:</strong> Devices like YubiKey that connect to your computer.
            </li>
            <li>
              <strong>Smart Cards:</strong> Cards with embedded chips requiring a card reader.
            </li>
            <li>
              <strong>One-Time Password (OTP) Generators:</strong> Devices that display codes changing every 30-60 seconds.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Benefits:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>High Security:</strong> Difficult for attackers to replicate or steal remotely.
            </li>
            <li>
              <strong>Phishing Protection:</strong> Prevents unauthorized access even if passwords are compromised.
            </li>
            <li>
              <strong>Ease of Use:</strong> Simple tap or insertion for authentication.
            </li>
          </ul>
          <p>
            Hardware-based MFA provides a robust defense against cyber attacks.
          </p>
        </>
      ),
    },
    {
      id: 6,
      content:
        "Regularly updating your passwords reduces the risk of unauthorized access from compromised credentials.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">The Importance of Proper Password Cycling</h2>
          <p className="mb-2">
            Changing your passwords periodically enhances your security posture.
          </p>
          <h3 className="text-lg font-semibold mb-1">Why Cycle Passwords:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Limit Exposure:</strong> Reduces the time a compromised password is valid.
            </li>
            <li>
              <strong>Adapt to Threats:</strong> Respond to new vulnerabilities or breaches.
            </li>
            <li>
              <strong>Compliance:</strong> Meets security policies of organizations or services.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Best Practices:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Set a Schedule:</strong> Change passwords every 3-6 months.
            </li>
            <li>
              <strong>Use Strong, Unique Passwords:</strong> Do not reuse old passwords.
            </li>
            <li>
              <strong>Update Critical Accounts First:</strong> Prioritize email, banking, and primary social media accounts.
            </li>
          </ul>
          <p>
            Regular password updates are a proactive step in protecting your digital identity.
          </p>
        </>
      ),
    },
    {
      id: 7,
      content:
        "Using unique passwords for each site prevents a breach on one platform from compromising your accounts elsewhere.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">One Password, One Site Principle</h2>
          <p className="mb-2">
            Reusing passwords across multiple sites significantly increases security risks.
          </p>
          <h3 className="text-lg font-semibold mb-1">Risks of Password Reuse:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Credential Stuffing:</strong> Attackers use leaked credentials to access other sites.
            </li>
            <li>
              <strong>Chain Reaction:</strong> A breach on one site can lead to compromises on others.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Benefits of Unique Passwords:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Containment:</strong> Limits the impact of a single breach.
            </li>
            <li>
              <strong>Increased Security:</strong> Makes it harder for attackers to access multiple accounts.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Implementing Unique Passwords:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Use Password Managers:</strong> Generate and store complex passwords securely.
            </li>
            <li>
              <strong>Create Passphrases:</strong> For memorable yet unique passwords without patterns.
            </li>
            <li>
              <strong>Avoid Patterns:</strong> Do not use incremental changes (e.g., Password1, Password2).
            </li>
          </ul>
          <p>
            By dedicating one strong password per site, you enhance overall security.
          </p>
        </>
      ),
    },
    {
      id: 8,
      content:
        "Password managers help you generate, store, and manage unique passwords securely across all your accounts.",
      imgSrc: "https://via.placeholder.com/100", // Replace with your actual image path
      modalContent: (
        <>
          <h2 className="text-xl font-semibold mb-2">Leveraging Password Managers for Security</h2>
          <p className="mb-2">
            Password managers are tools designed to securely store and manage your login credentials.
          </p>
          <h3 className="text-lg font-semibold mb-1">Advantages:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>Secure Storage:</strong> Encrypts your passwords, accessible only with a master password.
            </li>
            <li>
              <strong>Convenience:</strong> Autofills login forms and remembers complex passwords.
            </li>
            <li>
              <strong>Cross-Device Sync:</strong> Access your passwords on multiple devices.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Popular Password Managers:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              <strong>LastPass:</strong> Offers both free and premium features.
            </li>
            <li>
              <strong>1Password:</strong> Known for its user-friendly interface.
            </li>
            <li>
              <strong>Bitwarden:</strong> Open-source and provides robust security features.
            </li>
          </ul>
          <p>
            Password managers simplify the process of maintaining strong, unique passwords across all your accounts.
          </p>
        </>
      ),
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
          “There’s no silver bullet with cybersecurity; a layered defence is the only viable option.” — James Scott.
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
              {index < sections.length - 1 && <hr className="border-t w-full my-4" />}
            </React.Fragment>
          ))}
        </ScrollArea>
      </div>

      {/* Section Modal */}
      {activeSection && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-5 rounded-lg max-w-2xl w-full shadow-lg overflow-y-auto max-h-screen relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &#x2715;
            </button>
            <div>{activeSection.modalContent}</div>
          </div>
        </div>
      )}

      {/* Cookie Bar Modal */}
      {isCookieModalVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-5 rounded-lg max-w-lg w-full shadow-lg overflow-y-auto max-h-screen relative">
            <button
              onClick={handleCookieModalClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &#x2715;
            </button>
            <h2 className="text-lg font-bold mb-4">Legal Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to ensure that the content is accurate and up to date, we make no warranties or representations of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, services, or related graphics contained on the site for any purpose. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p className="mt-2">
              We do not offer professional legal, technical, or cybersecurity advice. For specific concerns related to cybersecurity, we recommend consulting a qualified professional. By using this website, you agree that we are not liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising from or in connection with the use of this website.
            </p>
            <p className="mt-2">
              This site may contain links to external websites that are not operated by us. We have no control over the content or availability of those sites and accept no responsibility for any loss or damage that may arise from your use of them.
            </p>
            <p className="mt-2">All content is subject to change without notice.</p>
          </div>
        </div>
      )}

      {/* Cookie Bar */}
      {isCookieBarVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 flex justify-between items-center shadow-lg">
          <span>
            Legal Disclaimer: This site is intended for general information and does not constitute legal advice. Research independently. By using this site you agree to these terms.
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
