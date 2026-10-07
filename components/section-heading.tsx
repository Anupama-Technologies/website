type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, children, as: Tag = "h2", className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {index && <span className="text-accent">{index}</span>}
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        {eyebrow}
      </p>
      <Tag className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </Tag>
      {children && <div className="mt-5 text-pretty text-lg leading-relaxed text-muted">{children}</div>}
    </div>
  );
}
