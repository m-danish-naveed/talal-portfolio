import Link from "next/link";

import { cn } from "@/lib/utils/cn";

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
          "text-foreground/80 hover:text-foreground flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase transition-colors",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          className="opacity-50"
        >
          <path
            d="M5.24264 5.36373V1.12109L1 1.12109"
            stroke="currentColor"
            strokeLinecap="square"
          />
        </svg>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/80 hover:text-foreground text-xs tracking-[0.1em] uppercase transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
