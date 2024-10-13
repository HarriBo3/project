import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthTool: React.FC = () => {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(zxcvbn(''));
  const [submittedPassword, setSubmittedPassword] = useState<string | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setResult(zxcvbn(newPassword));
  };

  const handleSubmit = () => {
    setSubmittedPassword(password);
  };

  const getStrengthLabel = () => {
    switch (result.score) {
      case 0:
        return 'very weak';
      case 1:
        return 'weak';
      case 2:
        return 'fair';
      case 3:
        return 'good';
      case 4:
        return 'strong';
      default:
        return '';
    }
  };

  const getCrackTime = () => {
    return result.crack_times_display.offline_slow_hashing_1e4_per_second;
  };

  return (
    <div className="text-center bg-gray-200 py-4 mt-10">
      <p className="text-lg italic font-semibold">
        “There’s no silver bullet with cybersecurity; a layered defense is the only viable option.” — James Scott.
      </p>

      <div className="rounded-lg shadow-lg p-10 w-full max-w-5xl mx-4 mt-16 text-center bg-gray-300">
        <h1 className="text-3xl font-bold text-slate-700 mb-4">Password Strength Testing Tool</h1>
        <p className="text-slate-700 mb-8">Think you have a strong password? Find out below.</p>

        <div className="flex items-center mb-8">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Evaluate your password:"
            className="border border-gray-400 rounded-lg p-3 w-full mr-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg"
          >
            Enter
          </button>
        </div>

        <div className="flex justify-between text-lg font-semibold">
          <div>
            <p className="text-blue-700">Your password strength:</p>
            <p className={`text-${result.score < 2 ? 'red' : result.score < 4 ? 'yellow' : 'green'}-500`}>
              {getStrengthLabel()}
            </p>
          </div>
          <div>
            <p className="text-blue-700">Estimated time to crack:</p>
            <p className="text-red-500">{getCrackTime()}</p>
          </div>
        </div>

        {submittedPassword && (
          <div className="mt-8 p-4 border rounded-lg bg-white">
            <p className="text-gray-700">You entered: <span className="font-bold">{submittedPassword}</span></p>
            <p className="text-gray-700">Websites like this could collect your passwords without you knowing, just by typing them in.</p>
            <p className="text-gray-700">They would be able to sell this information, or gain access to your accounts.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthTool;
