import { ExternalLink, Globe, BookOpen, LayoutTemplate, Instagram } from "lucide-react";

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
      className="flex items-center gap-3 p-4 w-full bg-white border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div className="text-primary/70 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
      <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export function SocialLinks() {
  const links = [
    {
      label: "Visit Website",
      href: "https://www.gaiusjimedits.com",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      label: "Get the Ebook",
      href: "https://ebook.gaiusjimedits.com",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Download Templates",
      href: "https://template.gaiusjimedits.com",
      icon: <LayoutTemplate className="w-5 h-5" />,
    },
    {
      label: "Follow on Instagram",
      href: "https://www.instagram.com/gaiusjimedits",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid gap-4 w-full max-w-md mx-auto mt-8">
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}
