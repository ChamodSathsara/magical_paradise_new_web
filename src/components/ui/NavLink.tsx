'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type NavLinkProps = {
  to: string;
  className?: string | ((state: { isActive: boolean }) => string);
  children: ReactNode | ((state: { isActive: boolean }) => ReactNode);
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>;

// Drop-in replacement for react-router-dom's <NavLink>, matching the
// render-prop / function-className API used throughout this project.
export function NavLink({ to, className, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = to === '/' ? pathname === '/' : pathname === to || (pathname ?? '').startsWith(`${to}/`);

  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;
  const resolvedChildren = typeof children === 'function' ? children({ isActive }) : children;

  return (
    <Link href={to} className={resolvedClassName} {...rest}>
      {resolvedChildren}
    </Link>
  );
}
