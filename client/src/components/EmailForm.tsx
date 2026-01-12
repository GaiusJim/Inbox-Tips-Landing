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
    <div className="w-full max-w-md mx-auto my-8 min-h-[120px]">
      <div 
        ref={containerRef} 
        className="w-full [&_form]:!font-sans [&_input]:!rounded-lg [&_input]:!border-border [&_button]:!bg-primary [&_button]:!text-primary-foreground [&_button]:!rounded-lg [&_button]:hover:!opacity-90 [&_.email-octopus-branding]:!hidden"
      />
    </div>
  );
}
