import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: Record<string, any> = {
    "auto-brokers": {
      title: "Inventory & Revenue Analytics — Auto Brokers",
      result: "+28% ATV",
      image: project1Image,
      context:
        "Beverly Hills Auto Brokers needed to optimize inventory and revenue planning across 200+ luxury used car SKUs. The challenge was identifying which customer segments would yield the highest margins.",
      actions: [
        "Built SQL-based dashboards to track inventory turns and revenue metrics",
        "Analyzed 5,000+ customer profiles to identify behavioral patterns",
        "Created Tableau visualizations of 12,000+ rows of sales data",
        "Conducted market segmentation analysis to inform pricing strategy",
      ],
      outcome:
        "Identified three high-margin customer segments that increased average transaction value by 26%. The dashboards became the primary tool for inventory planning decisions.",
      skills: ["SQL", "Tableau", "Excel", "Segmentation Analysis"],
      duration: "6 months",
      team: "Solo analyst",
    },
    "tumor-classification": {
      title: "Multimodal Tumor Classification — Hutao Tech",
      result: "91% accuracy",
      image: project2Image,
      context:
        "Hutao Tech's marketing department needed an AI-assisted diagnostic system that could classify tumors by analyzing both pathology images and textual medical reports.",
      actions: [
        "Applied Vision Transformer models to pathology image analysis",
        "Implemented BERT-based models for processing medical text reports",
        "Created multimodal architecture to jointly analyze images and text",
        "Validated performance across different modeling assumptions",
      ],
      outcome:
        "Achieved 91% classification accuracy on 5,000+ annotated cases, outperforming baseline by 12%. Contributed to an AI system now being evaluated for clinical deployment.",
      skills: ["Python", "Deep Learning", "PyTorch", "NLP", "Computer Vision"],
      duration: "4 months",
      team: "Cross-functional (Product, Clinical, ML)",
    },
    "itgc-audit": {
      title: "ITGC/ITAC Audit Integration — EY",
      result: "63 systems unified",
      image: project3Image,
      context:
        "Ernst & Young needed to integrate ITGC audit requirements for Baidu's 63 systems in 2023, building on the previous year's audit framework.",
      actions: [
        "Collected system information and checked 2022 audit status",
        "Integrated ITGC audit requirements based on 2022 standards",
        "Connected with system owners to confirm current status and needs",
        "Completed comprehensive ITGC audit demand list for all systems",
      ],
      outcome:
        "Successfully unified controls and audit requirements across 63 enterprise systems, creating a comprehensive framework that improved audit efficiency and compliance tracking.",
      skills: ["IT Audit", "System Analysis", "Compliance", "Stakeholder Management"],
      duration: "3 months",
      team: "System Audit Group",
    },
  };

  const project = projectData[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-tight font-bold text-4xl mb-4">
              Project not found
            </h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Hero */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-tight font-bold text-4xl sm:text-5xl">
                {project.title}
              </h1>
              <Badge className="text-lg px-4 py-1">{project.result}</Badge>
            </div>
            <div className="h-1 w-24 bg-brand mb-8"></div>
          </div>

          {/* Image */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="font-tight font-bold text-2xl mb-4">Context</h2>
                <p className="text-ink-60 leading-relaxed">{project.context}</p>
              </section>

              <section>
                <h2 className="font-tight font-bold text-2xl mb-4">Actions</h2>
                <ul className="space-y-3">
                  {project.actions.map((action: string, index: number) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-brand mt-1">•</span>
                      <span className="text-ink-60 leading-relaxed">
                        {action}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-tight font-bold text-2xl mb-4">Outcome</h2>
                <p className="text-ink-60 leading-relaxed">{project.outcome}</p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6 border border-line">
                <h3 className="font-semibold mb-4">Project Meta</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-ink-60 mb-1">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-ink-60 mb-1">Team</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 border border-line">
                <h3 className="font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill: string) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
