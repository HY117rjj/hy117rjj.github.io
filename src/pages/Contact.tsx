import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "I'll reply within 2-3 business days.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-tight font-bold text-5xl sm:text-6xl mb-4">
            Contact
          </h1>
          <p className="text-xl text-ink-60 mb-12">
            Have a project or a dataset? Let's talk.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="font-tight font-bold text-2xl mb-6">
                Get in Touch
              </h2>
              <p className="text-ink-60 mb-6 leading-relaxed">
                I'm always interested in new opportunities, collaborations, or
                just discussing data and analytics. Whether you have a specific
                project in mind or want to explore ideas, feel free to reach
                out.
              </p>
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg border border-line">
                <Mail className="h-5 w-5 text-brand mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a
                    href="mailto:renjunjia_john@hotmail.com"
                    className="text-brand hover:underline"
                  >
                    renjunjia_john@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Your name"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="purpose">Purpose</Label>
                    <Select required>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hire">Hire</SelectItem>
                        <SelectItem value="collaborate">Collaborate</SelectItem>
                        <SelectItem value="ask">Ask a Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell me about your project or question..."
                      rows={5}
                      className="mt-1.5"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" required className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-ink-60">
                      I consent to having this website store my submitted
                      information for response purposes.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-brand-light rounded-lg border border-brand text-center">
                  <CheckCircle className="h-16 w-16 text-brand mb-4" />
                  <h3 className="font-tight font-bold text-2xl mb-2 text-foreground">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-ink-60">
                    I'll reply within 2–3 business days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
