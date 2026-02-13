import { Globe, BookOpen, LayoutTemplate, Instagram } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 py-4 px-6 w-full bg-white border border-border rounded-xl shadow-sm hover:shadow-md hover:bg-accent hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group no-default-hover-elevate"
      data-testid={`link-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-medium text-foreground">
        {label}
      </span>
    </a>
  );
}

export function SocialLinks() {
  const links = [
    {
      label: "Visit Website",
      href: "https://copyeditor.gaiusjimedits.com/linkinbio",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      label: "Get the Ebook",
      href: "https://ebook.gaiusjimedits.com/b/hoREr/af6977458309da0",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Download Template",
      href: "https://template.gaiusjimedits.com/b/2PEQe/af698eb4754fa",
      icon: <LayoutTemplate className="w-5 h-5" />,
    },
    {
      label: "Follow on Instagram",
      href: "https://www.instagram.com/gaiusjimedits/",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full" data-testid="container-social-links">
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}
