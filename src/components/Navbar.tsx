import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="px-5 sm:px-12 py-6">
      <div className="flex justify-between items-center">
        <Logo />
        <Button
          className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md"
          asChild
        >
          <a href="https://github.com/Abmichael01/ai-gm" target="_blank" rel="noopener noreferrer">
            <Code2 />
            Source Code
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
