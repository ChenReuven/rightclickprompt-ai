import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="section pt-32 md:pt-40 bg-gradient-to-b from-primary-light to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 animate-fade-in-up">
            Transform Your Right-Click into AI Power
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Access AI assistance instantly with a simple right-click. Enhance your browsing experience with smart suggestions and instant answers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white flex items-center space-x-2"
              onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
            >
              <Chrome className="w-5 h-5" />
              <span>Add to Chrome</span>
              <span className="text-sm opacity-75">(Free)</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="mt-16 relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="RightClickPrompt AI in action"
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
};