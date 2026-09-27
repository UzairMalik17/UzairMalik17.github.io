import { siteConfig } from "@/config/site";
import { Container } from "../layout/container";

export function Hero() {
  return (
    <section id="top">
      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-24 lg:py-20">
          <div>
            <p className="animate-[hero-enter_600ms_cubic-bezier(0.22,1,0.36,1)_both] text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
              Software Engineer
            </p>

            <h1 className="mt-5 max-w-[18ch] animate-[hero-enter_600ms_100ms_cubic-bezier(0.22,1,0.36,1)_both] text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[var(--foreground)] sm:max-w-[20ch] sm:text-5xl md:text-7xl lg:max-w-4xl lg:text-[88px]">
              I build reliable web applications and AI-enhanced software.
            </h1>

            <p className="mt-8 max-w-2xl animate-[hero-enter_600ms_200ms_cubic-bezier(0.22,1,0.36,1)_both] text-lg leading-relaxed text-[var(--foreground-secondary)]">
              I work across frontend and backend systems, building maintainable
              applications, APIs, and integrations that solve practical
              problems.
            </p>

            <div className="mt-10 flex animate-[hero-enter_600ms_300ms_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-6">
              <a
                className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--accent-strong)]"
                href="#work"
              >
                View my work
              </a>

              <a
                className="group inline-flex items-center gap-1.5 py-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--foreground-secondary)]"
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noreferrer"
              >
                View CV
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          <aside className="animate-[hero-enter_600ms_400ms_cubic-bezier(0.22,1,0.36,1)_both] border-t border-[var(--border)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Currently exploring
              </p>

              <a
                className="mt-3 block text-lg font-medium leading-snug text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
                href="#playground"
              >
                Repository-aware AI developer tooling
              </a>
            </div>

            <div className="mt-10 border-t border-[var(--border)] pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Open to
              </p>

              <p className="mt-3 text-base leading-relaxed text-[var(--foreground-secondary)]">
                Software engineering opportunities and interesting projects.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
