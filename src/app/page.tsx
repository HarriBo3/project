"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Main() {
  const [content, setContent] = useState<string>('home');

  const renderContent = () => {
    switch (content) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar onChangeContent={setContent} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-28">
        {renderContent()}
      </main>
    </div>
  );

  return (
    <div>
      <bottomBar onChangeContent={setContent} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-28">
        {renderContent()}
      </main>
    </div>

  );
}
