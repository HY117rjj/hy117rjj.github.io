import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";

const Index = () => {
  const skills = ["Python", "SQL", "Tableau"];
  
  const featuredProjects = [
    {
      id: "auto-brokers",
      title: "Inventory & Revenue Analytics — Auto Brokers",
      summary: "Found 8 high-margin segments: +28% ATV.",
      tags: ["SQL", "Tableau"],
      image: project1Image,
    },
    {
      id: "tumor-classification",
      title: "Multimodal Tumor Classification — Hutao Tech",
      summary: "91% accuracy on 5k+ cases: +12% vs baseline.",
      tags: ["ML", "Python"],
      image: project2Image,
    },
    {
      id: "itgc-audit",
      title: "ITGC/ITAC Audit Integration — EY",
      summary: "Unified controls across 63 bulky systems.",
      tags: ["Audit", "Consulting"],
      image: project3Image,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-tight font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
                Data & Analytics{" "}
                <span className="relative inline-block">
                  for Growth
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-brand/20 -z-10"></span>
                </span>
              </h1>
              <p className="text-xl text-ink-60 mb-8 leading-relaxed">
                I turn messy data into dashboards and decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <MetricCard value="+26%" label="ATV" />
              <MetricCard value="91%" label="accuracy" />
              <div className="col-span-2">
                <MetricCard value="63 systems" label="audited" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Badge */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-tight font-bold text-3xl sm:text-4xl mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-48 h-48 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-brand to-accent overflow-hidden">
              <div className="w-full h-full bg-ink-60/20"></div>
            </div>
            <div>
              <h2 className="font-tight font-bold text-3xl sm:text-4xl mb-4">
                I'm an analytics grad student at USC.
              </h2>
              <p className="text-xl text-ink-60 mb-6 leading-relaxed">
                I build decision tools that move KPIs.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
