
import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <Hero />
      <Countdown />
      <About />
      <Contact />
    </main>
  );
}
