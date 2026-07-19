"use client";

import { type ReactNode } from "react";

import Link, { type LinkProps } from "next/link";

import { useTransition } from "./transition-provider";

interface TransitionLinkProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  children: ReactNode;
  className?: string;
}

export function TransitionLink({
  href,
  children,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If user presses modifier keys, let the browser handle it naturally
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }

    // If they click a normal internal link, intercept it
    if (onClick) onClick(e);
    e.preventDefault();
    navigate(href.toString());
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
