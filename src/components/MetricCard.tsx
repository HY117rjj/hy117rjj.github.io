import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricCard = ({ value, label, className }: MetricCardProps) => {
  return (
    <div
      className={cn(
        "bg-muted rounded-lg p-6 border border-line transition-all duration-200 hover:shadow-sm",
        className
      )}
    >
      <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-ink-60">{label}</div>
    </div>
  );
};
