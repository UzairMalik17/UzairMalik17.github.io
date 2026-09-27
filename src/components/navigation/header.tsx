import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { navigationItems } from "./navigation-items";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--background)]/95">
      <div className="container flex min-h-18 items-center justify-between gap-8">
        <Link
          className="shrink-0 text-[15px] font-semibold tracking-[-0.02em]"
          href="/"
        >
          Uzair Malik
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="py-2 text-[13px] font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            className="shrink-0 py-2 text-[13px] font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            className="shrink-0 rounded-md border border-[var(--border-subtle)] px-3 py-2 text-[13px] font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--foreground-secondary)]"
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            View CV <span aria-hidden="true">↗</span>
          </a>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
