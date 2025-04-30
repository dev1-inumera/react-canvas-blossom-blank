
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full py-16 sm:py-24 px-6 sm:px-10 hero-gradient rounded-xl">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight opacity-0 animate-fadeIn">
          Welcome to ReactBlank
        </h1>
        <p className="text-xl text-gray-600 opacity-0 animate-fadeIn delay-200">
          A clean, modern starting point for your React applications.
          Build something amazing with this template.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fadeIn delay-400">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
