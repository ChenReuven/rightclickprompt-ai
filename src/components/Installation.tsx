import { Download, Chrome, Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    title: "Visit Chrome Web Store",
    description: "Find RightClickPrompt AI on the Chrome Web Store",
    icon: Chrome,
  },
  {
    title: "Add to Chrome",
    description: "Click the 'Add to Chrome' button to install",
    icon: Download,
  },
  {
    title: "Start Using",
    description: "Right-click on any text field to access AI-powered suggestions",
    icon: Check,
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