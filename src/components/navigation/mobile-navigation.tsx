"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "./navigation-items";
import { siteConfig } from "@/config/site";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleNavigation() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-md text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? (
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[var(--border-subtle)] bg-[var(--background)]"
        >
          <ul className="container flex flex-col py-4">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block py-3 text-sm font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
                  href={item.href}
                  onClick={handleNavigation}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="mt-2 border-t border-[var(--border-subtle)] pt-3">
              <a
                className="block py-3 text-sm font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleNavigation}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>

            <li>
              <a
                className="block py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--foreground-secondary)]"
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleNavigation}
              >
                View CV <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
