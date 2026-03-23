import { useState } from "react";
import { Globe, BookOpen, LayoutTemplate, X } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  alignLeft?: boolean;
}

function SocialLink({ href, icon, label, alignLeft }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-glow flex items-center gap-3 py-4 px-6 w-full rounded-xl hover:-translate-y-0.5 transition-transform duration-200 group ${alignLeft ? "justify-start" : "justify-center"}`}
      data-testid={`link-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-primary group-hover:scale-110 transition-transform shrink-0">
        {icon}
      </div>
      <span className="font-medium text-foreground">
        {label}
      </span>
    </a>
  );
}

function SocialModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
      data-testid="modal-social-overlay"
    >
      <div
        className="relative flex flex-col items-center gap-8 p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          data-testid="button-close-modal"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-white/80 text-sm uppercase tracking-widest font-medium">
          Connect With Me
        </p>

        <div className="flex gap-10 items-center">
          <a
            href="https://www.linkedin.com/in/gaiusjimedits/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
            data-testid="link-modal-linkedin"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: "#0077B5" }}
            >
              <SiLinkedin className="w-12 h-12 text-white" />
            </div>
            <span className="text-white text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/gaiusjimedits"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
            data-testid="link-modal-instagram"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <SiInstagram className="w-12 h-12 text-white" />
            </div>
            <span className="text-white text-sm font-medium">Instagram</span>
          </a>
        </div>

        <p className="text-white/40 text-xs">Tap outside to close</p>
      </div>
    </div>
  );
}

export function SocialLinks() {
  const [showModal, setShowModal] = useState(false);

  const links = [
    {
      label: "Copyediting Service For Graduate Students",
      href: "https://copyeditor.gaiusjimedits.com/linkinbio",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      label: "Practical Ways to Defeat Procrastination: A Productivity Guide For Graduate Students",
      href: "https://ebook.gaiusjimedits.com/b/hoREr/af6977458309da0",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Graduate Productivity Notion Template (3 in 1 Bundle)",
      href: "https://template.gaiusjimedits.com/b/2PEQe/af698eb4754fa",
      icon: <LayoutTemplate className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 w-full" data-testid="container-social-links">
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}

        <button
          onClick={() => setShowModal(true)}
          className="link-glow flex items-center justify-start gap-3 py-4 px-6 w-full rounded-xl hover:-translate-y-0.5 transition-transform duration-200 group"
          data-testid="button-social-modal-trigger"
        >
          <div className="flex items-center gap-1 shrink-0">
            <SiLinkedin className="w-5 h-5 text-[#0077B5]" />
            <span className="text-muted-foreground text-xs">&</span>
            <SiInstagram className="w-5 h-5 text-[#d6249f]" />
          </div>
          <span className="font-medium text-foreground">
            Connect on LinkedIn & Instagram
          </span>
        </button>
      </div>

      {showModal && <SocialModal onClose={() => setShowModal(false)} />}
    </>
  );
}
