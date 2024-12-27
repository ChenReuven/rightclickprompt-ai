import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Chrome className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold">RightClickPrompt AI</span>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90 text-white flex items-center space-x-2"
          onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
        >
          <Chrome className="w-4 h-4" />
          <span>Add to Chrome</span>
        </Button>
      </div>
    </header>
  );
};