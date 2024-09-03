import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseInfo />
          <MedicalInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="bg-gray-200 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://kamar.mcglashan.school.nz/index.php/assets/crest.png"
          alt="John McGlashan College"
          className="h-16"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold">John McGlashan College</h1>
          <p className="text-sm italic">Lex Domini Lux Mundi</p>
        </div>
      </div>
      <LoginForm />
    </div>
  </header>
);

const Navbar = () => (
  <nav className="bg-blue-500 text-white py-2">
    <div className="container mx-auto flex justify-between">
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Notices
        </a>
        <a href="#" className="hover:underline">
          Enrolment
        </a>
      </div>
    </div>
  </nav>
);

const LoginForm = () => (
  <form className="bg-white p-4 rounded shadow">
    <div className="mb-4">
      <label className="block text-gray-700">Username:</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Username (Required)"
      />
    </div>
    <div>
      <label className="block text-gray-700">Password:</label>
      <input
        type="password"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Password (Required)"
      />
    </div>
  </form>
);

const CourseInfo = () => (
  <div className="text-center">
    <img
      src="https://www.nzia.co.nz/remote.axd/nzia.blob.core.windows.net/awards/0171adc6-1c15-41de-90bd-eda7c3f77d89.jpg"
      alt="Course Info"
      className="mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">Course Info</h2>
    <p>
      For detailed course information, pre-requisites, and subject selection
      forms, please click the link below.
    </p>
    <a
      href="http://seniorcourseselection.weebly.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 font-bold"
    >
      2024 Course Information Website
    </a>
  </div>
);

const MedicalInfo = () => (
  <div className="text-center">
    <img
      src="http://web.mcglashan.school.nz/CKN/JMC-1.jpeg"
      alt="Medical Info"
      className="mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">Medical Info Update</h2>
    <p>
      To update medical information, please contact Helen Clulee at the school
      office.
    </p>
    <a href="mailto:helen.clulee@mcglashan.school.nz" className="text-blue-500">
      helen.clulee@mcglashan.school.nz
    </a>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p>
        2024 |{' '}
        <a
          href="http://www.mcglashan.school.nz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          John McGlashan College
        </a>{' '}
        | Home <span className="float-right">04/09/2024 9:47am</span>
      </p>
    </div>
  </footer>
);

export default App;
