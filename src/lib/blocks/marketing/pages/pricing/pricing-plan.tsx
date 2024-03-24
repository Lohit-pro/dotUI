import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classes";
import type { Plan } from "./types";

interface PlanProps extends Plan {
  billing: "monthly" | "yearly";
  className?: string;
}
export const PricingPlan = (props: PlanProps) => {
  const {
    name,
    price,
    description,
    features,
    featured = false,
    billing,
    className,
  } = props;

  return (
    <section
      className={cn(
        "relative flex min-h-[530px] flex-col border border-gray-400 bg-card px-6 py-16 shadow-2xl dark:border-gray-800 sm:px-8",
        featured && "z-10 border-none ring-4 ring-ring/80",
        className
      )}
    >
      {featured && (
        <div className="absolute right-8 top-[-4px] z-[-1] translate-y-[-100%] rounded-t-lg bg-ring/80 px-4 py-1 text-white shadow-lg">
          Most popular
        </div>
      )}
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      <p className={cn("mt-2 text-base")}>{description}</p>
      <p className="order-first text-5xl font-light tracking-tight">
        {billing === "monthly" ? price.monthly : price.yearly}
        <span className="ml-2 text-base font-normal text-muted-foreground">
          billed {billing}
        </span>
      </p>
      <ul
        role="list"
        className={cn("order-last mt-10 flex min-h-[100px] flex-col gap-y-3 text-sm", {
          "min-h-[220px]": featured,
        })}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckCircleIcon />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "default" : "outline"}
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${billing === "monthly" ? price.monthly : price.yearly}`}
      >
        Get started
      </Button>
    </section>
  );
};