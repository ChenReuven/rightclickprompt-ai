import { Github, Twitter, Mail, Link } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
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
                <Button variant="link" className="h-auto p-0">Privacy Policy</Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">Terms of Service</Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="h-auto p-0">Help Center</Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">Contact Us</Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RightClickPrompt AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};