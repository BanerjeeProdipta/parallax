import React, { useEffect, useState } from "react";

const AnimatedSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = 1 - scrollPosition / 600;
  const scalePoint = Math.min(1, (scrollPosition - 4000) * 0.001);
  const rotation = scrollPosition > 700 ? (scrollPosition - 700) / 50 : 0;
  const scale = scrollPosition > 4000 ? 1 - scalePoint : 1;

  const sectionStyles = {
    opacity,
  };

  const NestedBackground = ({ depth }: { depth: number }) => {
    if (depth === 0) {
      return null;
    }

    const backgroundElements = Array.from({ length: 1 }).map((_, i) => (
      <div
        key={i}
        className={`relative h-full w-full origin-center ${
          depth % 2 === 0 ? "bg-gray-900" : "bg-white"
        }`}
        style={{
          padding: "2vmin",
          transform: `scale(${scale}) rotate(${rotation}deg)`,
        }}
      >
        <NestedBackground depth={depth - 1} />
      </div>
    ));

    return <>{backgroundElements}</>;
  };

  return (
    <div className="sticky top-0 h-screen bg-white pt-60">
      <div
        className="relative flex min-h-full flex-col items-center gap-4 overflow-hidden bg-white text-black space-y-6"
        style={sectionStyles}
      >
        <h1 className="text-center text-5xl font-black md:text-7xl">GENESIS</h1>
        <div
          className="flex items-center justify-center"
          style={{
            transform: `rotate(${scrollPosition}deg)`,
          }}
        >
          <div className="absolute h-8 w-1 rotate-90 bg-black"></div>
          <div className="absolute h-8 w-1 bg-black"></div>
        </div>
        <button className="bg-black px-3 py-1.5 text-base font-semibold uppercase text-white md:text-lg">
          Get started
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden bg-white"
        style={{ top: `${Math.max(0, 80 - scrollPosition * 0.1)}%` }}
      >
        <NestedBackground depth={22} />
      </div>
    </div>
  );
};

export default AnimatedSection;
