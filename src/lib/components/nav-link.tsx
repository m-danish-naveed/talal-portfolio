import { FiArrowUpRight } from "react-icons/fi";

import { cn } from "@/lib/utils/cn";

import { TransitionLink } from "./transition-link";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  isExternal,
  ...props
}: NavLinkProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-foreground/80 hover:text-foreground flex items-center gap-1.5 text-base font-medium uppercase transition-colors",
          className
        )}
        {...props}
      >
        {children}
        <FiArrowUpRight className="h-3 w-3 opacity-50" />
      </a>
    );
  }

  return (
    <TransitionLink
      href={href}
      className={cn(
        "text-foreground/80 hover:text-foreground text-base font-medium uppercase transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </TransitionLink>
  );
}
