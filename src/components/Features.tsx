import { Video, FileText, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Youtube Summarization",
    description: "Get quick summaries of YouTube videos without watching them entirely.",
  },
  {
    icon: FileText,
    title: "AI-Powered Summarization",
    description: "Advanced AI algorithms summarize content to provide concise insights instantly.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant responses with no delay, keeping your workflow smooth and efficient.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Compatible with all websites and supports multiple languages.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Supercharge Your Browsing
          </h2>
          <p className="text-gray-600">
            Experience the power of AI right at your fingertips with our innovative features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};