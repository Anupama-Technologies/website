export function InfoList({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {items.map((i) => (
        <div key={i.label} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
          <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted sm:pt-1">{i.label}</dt>
          <dd className="text-lg">{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AddressLines({ lines }: { lines: readonly string[] }) {
  return (
    <address className="not-italic leading-relaxed">
      {lines.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </address>
  );
}
