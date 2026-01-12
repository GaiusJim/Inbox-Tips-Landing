import { useEffect, useRef } from "react";

export function EmailForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up previous script if it exists to prevent duplicates on re-renders
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://eomail6.com/form/1cad9a4c-efe0-11f0-81b6-f9bd986c49f4.js";
    script.setAttribute("data-form", "1cad9a4c-efe0-11f0-81b6-f9bd986c49f4");

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto my-8 min-h-[120px]">
      <div 
        ref={containerRef} 
        className="w-full [&_form]:!font-sans [&_form]:!max-w-none [&_input]:!h-12 [&_input]:!text-base [&_input]:!rounded-xl [&_input]:!border-primary/20 [&_input]:!bg-white [&_input]:focus:!border-primary/40 [&_input]:focus:!ring-1 [&_input]:focus:!ring-primary/40 [&_button]:!h-12 [&_button]:!text-base [&_button]:!bg-primary [&_button]:!text-primary-foreground [&_button]:!rounded-xl [&_button]:!shadow-sm [&_button]:hover:!shadow-md [&_button]:hover:!opacity-95 [&_button]:!transition-all [&_.email-octopus-branding]:!hidden"
      />
    </div>
  );
}
