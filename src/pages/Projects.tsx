import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";

type FilterType = "all" | "analytics" | "ml" | "consulting";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const projects = [
    {
      id: "auto-brokers",
      title: "Inventory & Revenue Analytics — Auto Brokers",
      summary: "Found 8 high-margin segments: +28% ATV via SQL dashboards and market segmentation on 5,000+ customer profiles.",
      tags: ["SQL", "Tableau", "Segmentation"],
      image: project1Image,
      category: "analytics" as const,
    },
    {
      id: "tumor-classification",
      title: "Multimodal Tumor Classification — Hutao Tech",
      summary: "91% accuracy on 5k+ cases: +12% vs baseline using Vision Transformer and BERT-based models for pathology analysis.",
      tags: ["ML", "Python", "Deep Learning"],
      image: project2Image,
      category: "ml" as const,
    },
    {
      id: "itgc-audit",
      title: "ITGC/ITAC Audit Integration — EY",
      summary: "Unified controls across 63 bulky systems at Baidu, integrating 2023 ITGC audit requirements.",
      tags: ["Audit", "Consulting", "Systems"],
      image: project3Image,
      category: "consulting" as const,
    },
  ];

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Analytics", value: "analytics" },
    { label: "ML", value: "ml" },
    { label: "Consulting", value: "consulting" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-tight font-bold text-5xl sm:text-6xl mb-4">
            Projects
          </h1>
          <p className="text-xl text-ink-60 mb-12">
            Selected outcomes from recent work.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "transition-all",
                  activeFilter === filter.value && "shadow-sm"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-60 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
