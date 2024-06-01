"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button className="bg-green-100" variant="outline">Button</Button>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          hehe
          <code className="font-mono font-bold">fronk</code>
        </p>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </main>
    </div>
  );
}
