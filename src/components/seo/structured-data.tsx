import { siteConfig } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Malik",
  url: "https://uzairmalik17.github.io/",
  jobTitle: "Software Engineer",
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
