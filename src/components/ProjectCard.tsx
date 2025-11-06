import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  className?: string;
}

export const ProjectCard = ({
  id,
  title,
  summary,
  tags,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${id}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden border border-line transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-tight font-semibold text-xl mb-2 text-foreground group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-ink-60 text-sm mb-4 line-clamp-2">{summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-brand font-medium text-sm">
          View case
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
