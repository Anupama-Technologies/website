import Image from "next/image";

type Screenshot = { src: string; alt: string };

/**
 * Phone-shaped product frame. With no `screenshot` it renders an abstract CSS
 * placeholder; pass `{ src, alt }` (e.g. a file in /public) to show a real screen.
 */
export function PhoneMockup({ screenshot, className = "" }: { screenshot?: Screenshot; className?: string }) {
  return (
    <div
      className={`relative ${screenshot ? "aspect-[9/20]" : "aspect-[9/18.5]"} w-full max-w-[260px] rounded-[18%/8.7%] border border-line-strong bg-base p-[4%] shadow-[0_40px_80px_-30px_rgb(167_123_255/0.45)] ${className}`}
      {...(screenshot ? {} : { "aria-hidden": true })}
    >
      <div className="relative size-full overflow-hidden rounded-[15%/7.3%] bg-card-2">
        {screenshot ? (
          <div className="absolute inset-x-0 -top-[3.3%] bottom-0">
            <Image src={screenshot.src} alt={screenshot.alt} fill sizes="260px" className="object-cover object-bottom" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_20%_0%,rgb(255_107_157/0.55),transparent_60%),radial-gradient(100%_70%_at_100%_100%,rgb(167_123_255/0.6),transparent_60%)]" />
            {/* abstract stacked "cards" */}
            <div className="absolute inset-x-5 top-[18%] h-[46%] rotate-[-4deg] rounded-2xl border border-fg/15 bg-base/40" />
            <div className="absolute inset-x-5 top-[22%] h-[46%] rotate-[2deg] rounded-2xl border border-fg/20 bg-card/70 backdrop-blur-sm">
              <div className="m-4 size-9 rounded-full bg-linear-to-br from-accent to-accent-2" />
              <div className="mx-4 mt-2 h-2 w-2/3 rounded-full bg-fg/30" />
              <div className="mx-4 mt-2 h-2 w-1/3 rounded-full bg-fg/15" />
            </div>
            <div className="absolute inset-x-5 bottom-6 flex justify-center gap-3">
              <span className="size-11 rounded-full border border-fg/20 bg-base/50" />
              <span className="size-11 rounded-full bg-linear-to-br from-accent to-accent-2" />
              <span className="size-11 rounded-full border border-fg/20 bg-base/50" />
            </div>
          </>
        )}
        {!screenshot && <div aria-hidden="true" className="absolute left-1/2 top-[2%] h-[2.6%] w-[30%] -translate-x-1/2 rounded-full bg-base" />}
      </div>
    </div>
  );
}
