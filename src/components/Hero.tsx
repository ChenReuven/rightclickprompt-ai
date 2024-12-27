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
              onClick={() => window.open("https://chromewebstore.google.com/detail/rightclickprompt/mfpldajbmlikbbagbdgnnmofhhpjccfh", "_blank")}
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
        <div className="mt-16 relative">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/5dZgSqpP9jM"
              title="RightClickPrompt AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};