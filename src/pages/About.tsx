import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap, Briefcase, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Industries", value: "3", detail: "Auto · Health AI · Consulting" },
    { label: "Education", value: "USC", detail: "MS Analytics, GPA 3.85" },
    { label: "Experience", value: "4+", detail: "Professional internships" },
    { label: "Languages", value: "2", detail: "English · Mandarin" },
  ];

  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "💾" },
    { name: "Tableau", icon: "📊" },
    { name: "R", icon: "📈" },
    { name: "Excel", icon: "📑" },
    { name: "Machine Learning", icon: "🤖" },
  ];

  const timeline = [
    {
      title: "MS in Analytics",
      organization: "USC Viterbi School",
      period: "2024-Present",
      outcome: "GPA 3.85 · Focus on decision tools & ML",
    },
    {
      title: "Auto Brokers Analyst",
      organization: "Beverly Hills Auto Brokers",
      period: "2024-2025",
      outcome: "Increased ATV by 26% via segmentation",
    },
    {
      title: "Health AI Intern",
      organization: "Hutao Tech",
      period: "2023-2024",
      outcome: "91% accuracy on tumor classification",
    },
    {
      title: "IT Audit Intern",
      organization: "Ernst & Young",
      period: "2023",
      outcome: "Integrated controls for 63 systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Intro Band */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-brand to-accent overflow-hidden">
              <div className="w-full h-full bg-ink-60/20"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-tight font-bold text-4xl sm:text-5xl mb-4">
                I'm an analytics grad student at USC.
              </h1>
              <p className="text-xl text-ink-60 mb-6 leading-relaxed">
                I build decision tools that move KPIs. My work spans revenue
                optimization, AI-assisted diagnostics, and enterprise system
                auditing.
              </p>
              <Button className="w-fit gap-2" asChild>
                <a href="/Junjia_Ren-Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Facts */}
          <section className="mb-20">
            <h2 className="font-tight font-bold text-2xl mb-8">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-light rounded-lg p-6 border border-line"
                >
                  <div className="text-3xl font-bold text-brand mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-ink-60">{stat.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Toolbox */}
          <section className="mb-20">
            <h2 className="font-tight font-bold text-2xl mb-8">Toolbox</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg border border-line hover:border-brand transition-colors"
                >
                  <span className="text-4xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="font-tight font-bold text-2xl mb-8">Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand"></div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-line mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-ink-60 mb-2">{item.organization}</p>
                    <p className="text-sm text-foreground">{item.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
