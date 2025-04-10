import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";
import { forwardRef, SVGProps } from "react";

// Define props interface with optional accessibility attributes
type ButtonLinkProps = PrismicNextLinkProps & {
  ariaLabel?: string; // Optional ARIA label for screen readers
  disabled?: boolean; // Optional disabled state
  variant?: "primary" | "secondary"; // Add variants for flexibility
  size?: "sm" | "md" | "lg"; // Add size options
  className?: string; // Custom className for additional styling
  icon?: boolean; // Optional prop to toggle icon visibility
};

// Forward ref to ensure compatibility with PrismicNextLink
const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(({
  className,
  ariaLabel,
  disabled = false,
  variant = "primary",
  size = "md",
  icon = true, // Default to no icon
  ...restProps
}, ref) => {
  const baseStyles = "relative font-semibold  inline-flex items-center justify-center rounded-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent";

  const variantStyles = {
    primary: "bg-violet-200/10 border-2 md:border-3 border-foreground text-foreground hover:border-primary hover:bg-foreground dark:hover:border-transparent hover:text-background dark:hover:text-brand after:bg-muted-background after:bg-opacity-0 after:blur-md transition-colors duration-300 after:transition-all after:duration-500 after:hover:bg-opacity-15",
    secondary: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 after:bg-gray-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 after:hover:bg-opacity-10",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-lg",
    lg: "px-6 py-3 text-lg md:px-12",
  };

  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    "after:absolute after:inset-0 after:-z-10 after:rounded-full",
    disabled && "pointer-events-none",
    className
  );

  return (
    <PrismicNextLink
      ref={ref}
      className={combinedClasses}
      aria-label={ariaLabel || (restProps.children as string)} // Fallback to children if no ariaLabel
      aria-disabled={disabled}
      {...restProps}
    >
      <span className="flex  text-semibold items-center gap-2">
        {restProps.children}
        {icon && <ForwardSvg className="ml-2 mt-1 w-6 h-6  " />}
      </span>
    </PrismicNextLink>
  );
});

ButtonLink.displayName = "ButtonLink"; // For better debugging

export function ForwardSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path fill="currentColor" d="M12.192 16.827V12.5H3.077v-1h9.115V7.173L19.788 12zm1-1.823L17.91 12l-4.718-3.004zm0-3.004"></path>
    </svg>
  );
}

export default ButtonLink;