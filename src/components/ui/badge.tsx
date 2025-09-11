import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/80",
        "success-light": "border-transparent bg-success-light text-success shadow",
        warning: "border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80",
        "warning-light": "border-transparent bg-warning-light text-warning shadow",
        error: "border-transparent bg-error text-error-foreground shadow hover:bg-error/80",
        "error-light": "border-transparent bg-error-light text-error shadow",
        info: "border-transparent bg-info text-info-foreground shadow hover:bg-info/80",
        "info-light": "border-transparent bg-info-light text-info shadow",
        neutral: "border-transparent bg-neutral text-neutral-foreground shadow hover:bg-neutral/80",
        "neutral-light": "border-transparent bg-neutral-light text-neutral shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
