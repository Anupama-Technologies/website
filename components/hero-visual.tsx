import { PhoneMockup } from "./phone-mockup";

// Labels sit on the outer edge of each layer so the phone never covers them.
const layers = [
  { label: "Product", n: "01", cls: "left-0 top-[6%] h-[36%] w-[58%] [animation-delay:0s]" },
  { label: "Technology", n: "02", cls: "right-0 top-[36%] h-[30%] w-[58%] items-end text-right [animation-delay:-3s]" },
  { label: "Experience", n: "03", cls: "left-0 bottom-[5%] h-[28%] w-[58%] [animation-delay:-6s]" },
];

/** Abstract "product being built" composition. Purely decorative. */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/20 blur-3xl" />

      {/* corner registration marks */}
      {["left-0 top-0", "right-0 top-0 rotate-90", "right-0 bottom-0 rotate-180", "left-0 bottom-0 -rotate-90"].map((p) => (
        <span key={p} className={`absolute size-4 border-l border-t border-line-strong ${p}`} />
      ))}

      {layers.map((l) => (
        <div
          key={l.label}
          className={`animate-drift absolute flex flex-col rounded-md border border-line-strong bg-card/60 p-3 sm:p-4 ${l.cls}`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px] sm:tracking-[0.2em]">
            <span className="text-accent">{l.n}</span> {l.label}
          </p>
          <div className="mt-3 w-full space-y-2">
            <div className="h-1.5 w-3/4 rounded-full bg-fg/10 [.text-right_&]:ml-auto" />
            <div className="h-1.5 w-1/2 rounded-full bg-fg/10 [.text-right_&]:ml-auto" />
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 w-[40%] sm:w-[36%] -translate-x-1/2 -translate-y-1/2">
        <PhoneMockup className="animate-drift [animation-delay:-1.5s]" />
      </div>
    </div>
  );
}
