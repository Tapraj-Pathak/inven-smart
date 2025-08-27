import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark hover:shadow-medium",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive-light hover:shadow-medium",
        outline:
          "border border-border bg-card hover:bg-card-hover hover:shadow-soft",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-muted hover:shadow-medium",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "bg-success text-success-foreground shadow-soft hover:bg-success-light hover:shadow-medium",
        warning:
          "bg-warning text-warning-foreground shadow-soft hover:bg-warning-light hover:shadow-medium",
        icon: "h-9 w-9 rounded-full bg-card hover:bg-card-hover shadow-soft hover:shadow-medium",
        gradient:
          "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-105 transition-transform",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);