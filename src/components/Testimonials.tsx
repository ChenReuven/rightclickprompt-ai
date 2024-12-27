import { Star, MessageSquare, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    text: "RightClickPrompt AI has revolutionized how I write. The contextual suggestions are incredibly accurate!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Developer",
    text: "This extension saves me hours of work. The AI suggestions are spot-on and the interface is seamless.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Manager",
    text: "A game-changer for content creation. The right-click feature is intuitive and incredibly useful.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
          </div>
          <p className="text-muted-foreground">Join thousands of satisfied users who trust RightClickPrompt AI</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};