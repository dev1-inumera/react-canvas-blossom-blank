
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 sm:px-10 flex justify-between items-center border-b">
      <div className="flex items-center">
        <h1 className="text-xl font-medium">ReactBlank</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          Documentation
        </Button>
        <Button variant="ghost" size="sm">
          GitHub
        </Button>
        <Button variant="outline" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
