import seal from "@/assets/firm-seal.png";

// The firm's seal from its brochure cover, drawn as a mask so it takes the
// current text colour (ink on parchment, ochre or parchment on dark sections).
export function Seal({ className = "", label }: { className?: string; label?: string }) {
  const mask = { maskImage: `url(${seal})`, WebkitMaskImage: `url(${seal})`, maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" } as const;
  return <span role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={`inline-block shrink-0 bg-current ${className}`} style={mask} />;
}
