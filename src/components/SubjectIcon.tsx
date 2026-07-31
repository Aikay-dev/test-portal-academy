import { Sigma, Atom, FlaskConical, Leaf, Monitor, MessageSquareText } from "lucide-react";
import type { Subject } from "@/lib/courses";
import { cn } from "@/lib/utils";

const icons = {
  sigma: Sigma,
  atom: Atom,
  flask: FlaskConical,
  leaf: Leaf,
  monitor: Monitor,
  message: MessageSquareText,
} as const;

export default function SubjectIcon({
  name,
  className,
}: {
  name: Subject["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={cn("h-6 w-6", className)} aria-hidden />;
}
