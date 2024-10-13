import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center bg-gray-200 py-4 mt-10">
      <p className="text-lg italic font-semibold">
        “There’s no silver bullet with cybersecurity; a layered defense is the only viable option.” — James Scott.
      </p>

      <div className="mt-10 text-lg font-semibold">
        <p>
          About Us
        </p>

        <p className="mt-4">
          Welcome to our website! We are passionate about bringing you the best content, resources, and experiences in <strong>Cyber Security</strong>. Our mission is to provide valuable insights, foster a community of like-minded individuals, and help you navigate the world of <strong>Cyber Security and Personal Online Safety</strong>.
        </p>

        <p className="mt-4">
          Founded in <strong>2024</strong>, our team is dedicated to:
        </p>

        <ul className="mt-4 list-disc list-inside">
          <li>
            <strong>Quality Content</strong>: We strive to produce well-researched and engaging articles, tutorials, and reviews that inform and inspire our readers.
          </li>
          <li className="mt-2">
            <strong>Community Engagement</strong>: We believe in the power of community and encourage open discussions, feedback, and collaboration among our visitors.
          </li>
          <li className="mt-2">
            <strong>Continuous Improvement</strong>: We are committed to constantly enhancing our site and offerings based on your needs and the latest trends.
          </li>
        </ul>

        <p className="mt-4">
          Whether you're a seasoned professional or just starting out, we're here to support you on your journey. Explore our site to find articles, resources, and tools tailored to your interests.
        </p>

        <p className="mt-4">
          Thank you for being a part of our community. If you have any questions or suggestions, feel free to visit our Contact section to message us.
        </p>
      </div>
    </div>
  );
};

export default About;

