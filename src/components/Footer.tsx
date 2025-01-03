import { Github, Twitter, Mail, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:chen.rvn@gmail.com";
  };

  return (
    <footer className="bg-primary/5 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">RightClickPrompt AI</h3>
            <p className="text-sm text-muted-foreground">
              Enhance your writing with AI-powered suggestions right from your browser.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <RouterLink to="/privacy">
                  <Button variant="link" className="h-auto p-0">Privacy Policy</Button>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/terms">
                  <Button variant="link" className="h-auto p-0">Terms of Service</Button>
                </RouterLink>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="h-auto p-0" onClick={handleContactClick}>Contact Us</Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => window.open("https://github.com/ChenReuven/", "_blank")}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => window.open("https://x.com/ChenRvn", "_blank")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => window.open("https://www.youtube.com/@chenrvn", "_blank")}
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={handleContactClick}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akita Labs AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};