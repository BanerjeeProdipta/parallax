"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import React from "react";

const Home = () => {
  return (
    <section className="bg-white">
      <nav className="fixed top-0 z-10 flex h-[56px] w-full items-center justify-between bg-gray-900 py-8 px-4 text-white">
        <p className="font-black text-xl">GENESIS</p>
      </nav>

      <div className="relative z-0 h-[1000vh] lg:h-[850vh] bg-neutral-200">
        <AnimatedSection />
      </div>

      <div className="grid h-screen place-content-center bg-gray-900 text-lg font-black text-white">
        <span>Thank you!</span>
      </div>
    </section>
  );
};

export default Home;
