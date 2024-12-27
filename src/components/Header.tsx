import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:chen.rvn@gmail.com";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Chrome className="w-8 h-8 text-primary" />
          <Link to="/" className="text-xl font-semibold">RightClickPrompt AI</Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/privacy" className="text-gray-700 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-700 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={handleContactClick}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </nav>
          
          <Button
            className="bg-primary hover:bg-primary/90 text-white flex items-center space-x-2"
            onClick={() => window.open("https://chromewebstore.google.com/detail/rightclickprompt/mfpldajbmlikbbagbdgnnmofhhpjccfh", "_blank")}
          >
            <Chrome className="w-4 h-4" />
            <span>Add to Chrome</span>
          </Button>
        </div>
      </div>
    </header>
  );
};