import { Download, MousePointerClick, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    title: "Add to Chrome",
    description: "Install RightClickPrompt AI from the Chrome Web Store with just one click",
    icon: Download,
  },
  {
    title: "Right Click in any site",
    description: "Simply right-click on any text or content you want to work with",
    icon: MousePointerClick,
  },
  {
    title: "Select an option from AI powered",
    description: "Choose from various AI-powered features to enhance your browsing experience",
    icon: Sparkles,
  },
];

export const Installation = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">How to Install</h2>
          </div>
          <p className="text-muted-foreground">Get started with RightClickPrompt AI in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="absolute top-6 right-6 text-primary/10 text-4xl font-bold">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};